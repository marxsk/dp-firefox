import siteList from './sites/sites';

const ROUND_DECIMALS = 100;

const LIST_NAME = 'ahrefs';
const PERIODIC_ALARM_LABEL = 'periodic-alarm';
const LAST_UPDATE_KEY = 'last_update_key';
const USE_OTHER_SITES = true;

let ALARM_PERIOD = 60;
let DAY_INTERVAL = 1000 * 60 * 60 * 24;

const DEBUG = true;

if (DEBUG) {
    ALARM_PERIOD = 1;               // 1 minute
    DAY_INTERVAL = 1000 * 60 * 5;   // 5 minutes
}

/**
 *  Initialization of the browser extension
 */
async function handleStartup() {
    console.log('Loading the extension');

    setAlarms();

    const trigger = await shouldTrigger();
    if (trigger === true) {
        console.log('Trigger processing of history at the start of the browser');
        processHistory();
    }

    console.log('Startup process finished succesfully')
}

/**
 *  Test if we should send a data for yesterday.
 * 
 *  If it is not possible to determine if data were sent, just attempt to send them again.
 *  We use time-shifting so the trigger works in the local time, not it the UTC
 * 
 *  @return {boolean} true - data should be sent
 */
async function shouldTrigger() {
    const localStorage = await browser.storage.local.get();
    if (localStorage[LAST_UPDATE_KEY] === undefined) {
        console.log('Local storage does not contain relevant information');
        return true;
    }

    const TIME_ZONE_OFFSET = new Date().getTimezoneOffset() * 60 * 1000;
    return localStorage[LAST_UPDATE_KEY] < (Math.floor((Date.now() + TIME_ZONE_OFFSET) / DAY_INTERVAL) * DAY_INTERVAL - 1);
}

/**
 *  Setup periodic alarm that can process history
 * 
 *  We have to send data once a day, so the best time will be just after midnight. Problem is
 *  that at that time people usually have their computer:
 *    - turned off -> data will be send when browser is starting
 *    - sleep mode -> the alarm cannot be triggered. So we need to run trigger function more often
 *           than really necessary. 
 * 
 *  The ideal solution will be to set alarm to 00:01 (beware of server-side high-load) and if it is not triggered
 *  do it periodically. This implementation runs alarm every ALARM_PERIOD minutes and it just check if data were sent.
 *  So overhead is mininal.
 * 
 *  @todo Test real impact on hibernate on alarms (documentation not available)
 */
async function setAlarms() {
    console.log('Setting up the periodic alarm');

    await browser.alarms.clear(PERIODIC_ALARM_LABEL);
    await browser.alarms.create(PERIODIC_ALARM_LABEL, {
        periodInMinutes: ALARM_PERIOD,
    });

    browser.alarms.onAlarm.addListener(async (alarmInfo) => {
        if (alarmInfo.name !== PERIODIC_ALARM_LABEL) {
            return;
        }

        console.log('Trigger processing of history via the periodic alarm');
        const trigger = await shouldTrigger();

        if (trigger === true) {
            processHistory();
        }
    });
}

/**
 *  Process history and prepare data to be send to servers
 *
 *  @returns Histogram of servers in the predefined list and their visits
 * 
 *  We will obtain history for last (finished) day and for each item we will do deduplication.
 *  The deduplication consist of:
 *     - removing same URL that differs only in http/https
 *     - merging (www.foo.com + foo.com) into one entry that has higher number of different visit counts
 * 
 *  Be aware that we are counting items in the history, not the number of real visits. Such number is not available for
 *  time interval. It is possible to get this number but we will have to store more information in the storage. It is
 *  technically possible but it might have impact on anonymity of the user.
 */
function processHistory() {
    console.log('Processing the history');

    const currentTime = new Date();
    const currentTimestamp = currentTime.getTime();
    const TIME_ZONE_OFFSET = currentTime.getTimezoneOffset() * 60 * 1000;
    const startOfYesterdayUTC = (Math.floor((currentTimestamp + TIME_ZONE_OFFSET) / DAY_INTERVAL) - 1) * DAY_INTERVAL;
    // local time when yesterday UTC has started
    const startOfYesterdayLocal = startOfYesterdayUTC - TIME_ZONE_OFFSET;
    const endOfYesterdayLocal = startOfYesterdayLocal + DAY_INTERVAL - 1;

    // startTime and endTime are in local time
    const searching = browser.history.search(
        {
            text: '',
            startTime: startOfYesterdayLocal,
            endTime: endOfYesterdayLocal
        }
    )

    searching.then((history) => {
        console.log(history);

        const visitedPagesMap = {};
        history.map((item) => {
            // remove automatic redirection http->https
            const urlPage = item.url.replace(/^.*:\/\//, '');
            if (!(Object.keys(visitedPagesMap)).includes(urlPage)) {
                visitedPagesMap[urlPage] = item;
                visitedPagesMap[urlPage].url = urlPage;
            }
        });

        // get domain name from the complete URL
        const visitedDomainNames = Object.keys(visitedPagesMap).map((item) => {
            return visitedPagesMap[item].url.replace(/\/.*/, '');
        })

        // get count of visits for individual domains
        const visitsPerDomain = visitedDomainNames.reduce(
            (a, b) => {
                a[b] = typeof (a[b]) !== 'undefined' ? a[b] + 1 : 1;
                return a;
            },
            {}
        );

        // get ratio of visits for each domain from the sitelist
        const visitedListMap = siteList[LIST_NAME].map((serverName) => {
            const validDomains = Object.keys(visitsPerDomain).filter((domain) => {
                return ((domain === serverName) || (domain.endsWith('.' + serverName)));
            });

            let visitsPerSite = 0;
            for (const domain of validDomains) {
                if (validDomains.includes('www.' + domain)) {
                    visitsPerSite += Math.max(
                        visitsPerDomain[domain],
                        visitsPerDomain['www.' + domain]
                    )
                    visitsPerDomain[domain] = 0;
                    visitsPerDomain['www.' + domain] = 0;
                } else if (domain.startsWith('www.') && validDomains.includes(domain.substr(4))) {
                    // This option is already covered, so we will not use this record
                } else {
                    visitsPerSite += visitsPerDomain[domain];
                    visitsPerDomain[domain] = 0;
                }
            }

            return visitsPerSite;
        });

        // Count all other sites that were not yet processed (what is reason why we set it to 0 in the previous block)
        const otherVisits = Object.keys(visitsPerDomain).reduce((sum, key) => sum + visitsPerDomain[key], 0);

        let totalVisits = Object.keys(visitedListMap).reduce((a, b) => {
            return a + visitedListMap[b];
        }, 0);

        if (USE_OTHER_SITES === true) {
            totalVisits += otherVisits;
        }

        if (totalVisits === 0) {
            // @todo: what to do if histogram cannot be created (?) - sum cannot be one
            console.log('There are no sites that were visited');
        } else {
            const ratioVisitedListMap = visitedListMap.map((item) => {
                return Math.round(ROUND_DECIMALS * item / totalVisits) / ROUND_DECIMALS;
            })

            if (USE_OTHER_SITES) {
                ratioVisitedListMap.push(Math.round(ROUND_DECIMALS * otherVisits / totalVisits) / ROUND_DECIMALS);
            }

            console.log(`Window: ${startOfYesterdayLocal} - ${endOfYesterdayLocal}`);
            console.log(ratioVisitedListMap);
            // @note: set-up CORS on the server-side https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
            fetch('http://localhost:8000/favicon.ico').then(x => {
                console.log('DONE');
            })
        }

        browser.storage.local.set({ [LAST_UPDATE_KEY]: endOfYesterdayLocal });
    })
}

browser.runtime.onStartup.addListener(handleStartup);
browser.runtime.onInstalled.addListener(handleStartup);

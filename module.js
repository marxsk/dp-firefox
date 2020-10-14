const siteList = {};
const ROUND_DECIMALS = 100;

// @todo: there are issues when I try to import/require file

// source: https://ahrefs.com/blog/most-visited-websites/
// all domain names were transformed to the second level domain
siteList['ahrefs'] = [
    "youtube.com",
    "wikipedia.org",
    "twitter.com",
    "facebook.com",
    "amazon.com",
    "yelp.com",
    "reddit.com",
    "imdb.com",
    "fandom.com",
    "pinterest.com",
    "tripadvisor.com",
    "instagram.com",
    "walmart.com",
    "craigslist.org",
    "ebay.com",
    "linkedin.com",
    "google.com",
    "healthline.com",
    "etsy.com",
    "indeed.com",
    "apple.com",
    "espn.com",
    "webmd.com",
    "fb.com",
    "nytimes.com",
    "cnn.com",
    "merriam-webster.com",
    "gamepedia.com",
    "microsoft.com",
    "target.com",
    "homedepot.com",
    "quora.com",
    "nih.gov",
    "rottentomatoes.com",
    "netflix.com",
    "quizlet.com",
    "weather.com",
    "mapquest.com",
    "britannica.com",
    "businessinsider.com",
    "dictionary.com",
    "zillow.com",
    "mayoclinic.org",
    "bestbuy.com",
    "theguardian.com",
    "yahoo.com",
    "msn.com",
    "usatoday.com",
    "medicalnewstoday.com",
    "urbandictionary.com",
    "usnews.com",
    "foxnews.com",
    "genius.com",
    "allrecipes.com",
    "spotify.com",
    "glassdoor.com",
    "forbes.com",
    "cnet.com",
    "yahoo.com",
    "irs.gov",
    "lowes.com",
    "mail.yahoo.com",
    "aol.com",
    "steampowered.com",
    "washingtonpost.com",
    "usps.com",
    "office.com",
    "retailmenot.com",
    "wiktionary.org",
    "paypal.com",
    "foodnetwork.com",
    "hulu.com",
    "live.com",
    "cbssports.com",
    "wayfair.com",
    "ca.gov",
    "bleacherreport.com",
    "macys.com",
    "accuweather.com",
    "xfinity.com",
    "go.com",
    "techradar.com",
    "groupon.com",
    "investopedia.com",
    "yellowpages.com",
    "steamcommunity.com",
    "chase.com",
    "wellsfargo.com",
    "npr.org",
    "apartments.com",
    "roblox.com",
    "huffpost.com",
    "bankofamerica.com",
    "bbb.org",
    "expedia.com",
    "wikihow.com",
    "ign.com",
    "wowhead.com"
];

// source: alexa500
siteList["alexa500"] = [
    "google.com",
    "facebook.com",
    "youtube.com",
    "amazon.com",
    "yahoo.com",
    "wikipedia.org",
    "ebay.com",
    "twitter.com",
    "reddit.com",
    "netflix.com",
    "craigslist.org",
    "linkedin.com",
    "pinterest.com",
    "live.com",
    "bing.com",
    "imgur.com",
    "go.com",
    "instagram.com",
    "chase.com",
    "paypal.com",
    "diply.com",
    "cnn.com",
    "tumblr.com",
    "msn.com",
    "bankofamerica.com",
    "walmart.com",
    "espn.go.com",
    "zillow.com",
    "t.co",
    "wellsfargo.com",
    "nytimes.com",
    "imdb.com",
    "yelp.com",
    "blogspot.com",
    "weather.com",
    "apple.com",
    "office.com",
    "homedepot.com",
    "aol.com",
    "huffingtonpost.com",
    "target.com",
    "etsy.com",
    "comcast.net",
    "washingtonpost.com",
    "microsoft.com",
    "wordpress.com",
    "foxnews.com",
    "microsoftonline.com",
    "buzzfeed.com",
    "capitalone.com",
    "tripadvisor.com",
    "wikia.com",
    "xfinity.com",
    "dropbox.com",
    "pornhub.com",
    "indeed.com",
    "outbrain.com",
    "bestbuy.com",
    "salesforce.com",
    "americanexpress.com",
    "groupon.com",
    "gfycat.com",
    "usps.com",
    "pandora.com",
    "citi.com",
    "lowes.com",
    "twitch.tv",
    "hulu.com",
    "att.com",
    "googleusercontent.com",
    "slickdeals.net",
    "github.com",
    "ups.com",
    "adobe.com",
    "stackoverflow.com",
    "dailymail.co.uk",
    "usatoday.com",
    "verizonwireless.com",
    "force.com",
    "vice.com",
    "xvideos.com",
    "mlb.com",
    "godaddy.com",
    "cnet.com",
    "fedex.com",
    "macys.com",
    "bbc.com",
    "kohls.com",
    "forbes.com",
    "quora.com",
    "kat.cr",
    "southwest.com",
    "ancestry.com",
    "conservativetribune.com",
    "intuit.com",
    "realtor.com",
    "discovercard.com",
    "ozock.com",
    "usaa.com",
    "taboola.com",
    "costco.com",
    "expedia.com",
    "nbcnews.com",
    "amazonaws.com",
    "webmd.com",
    "feedly.com",
    "gizmodo.com",
    "fidelity.com",
    "trulia.com",
    "ticketmaster.com",
    "ca.gov",
    "wunderground.com",
    "airbnb.com",
    "wayfair.com",
    "gap.com",
    "theguardian.com",
    "ask.com",
    "netteller.com",
    "businessinsider.com",
    "newegg.com",
    "xhamster.com",
    "soundcloud.com",
    "nih.gov",
    "vimeo.com",
    "spotify.com",
    "abcnews.go.com",
    "about.com",
    "nordstrom.com",
    "wsj.com",
    "patch.com",
    "accuweather.com",
    "flickr.com",
    "goodreads.com",
    "drudgereport.com",
    "lifebuzz.com",
    "adp.com",
    "deviantart.com",
    "ebates.com",
    "verizon.com",
    "overstock.com",
    "onclickads.net",
    "nextdoor.com",
    "answers.com",
    "usbank.com",
    "kayak.com",
    "stackexchange.com",
    "pch.com",
    "latimes.com",
    "npr.org",
    "allrecipes.com",
    "woot.com",
    "instructure.com",
    "cbsnews.com",
    "aa.com",
    "retailmenot.com",
    "sears.com",
    "zulily.com",
    "viralthread.com",
    "redfin.com",
    "steamcommunity.com",
    "people.com",
    "parentanswercentre.com",
    "taleo.net",
    "delta.com",
    "ign.com",
    "blogger.com",
    "roblox.com",
    "creditkarma.com",
    "mint.com",
    "weather.gov",
    "ikea.com",
    "myway.com",
    "glassdoor.com",
    "steampowered.com",
    "westernjournalism.com",
    "hbogo.com",
    "jcpenney.com",
    "united.com",
    "txxx.com",
    "slate.com",
    "bleacherreport.com",
    "icloud.com",
    "lifehacker.com",
    "bloomberg.com",
    "mapquest.com",
    "reddituploads.com",
    "sharepoint.com",
    "hclips.com",
    "discover.com",
    "putlocker.is",
    "swagbucks.com",
    "politico.com",
    "box.com",
    "priceline.com",
    "fitbit.com",
    "webex.com",
    "myfitnesspal.com",
    "pnc.com",
    "wikihow.com",
    "walgreens.com",
    "blackboard.com",
    "staples.com",
    "tmz.com",
    "thesaurus.com",
    "foodnetwork.com",
    "houzz.com",
    "irs.gov",
    "baidu.com",
    "nypost.com",
    "worldlifestyle.com",
    "audible.com",
    "thepiratebay.org",
    "surveymonkey.com",
    "nydailynews.com",
    "t-mobile.com",
    "dmv.org",
    "dell.com",
    "thekitchn.com",
    "pinimg.com",
    "kickstarter.com",
    "meetup.com",
    "slack.com",
    "qvc.com",
    "sfgate.com",
    "onlinecreditcenter6.com",
    "zappos.com",
    "pogo.com",
    "thatviralfeed.com",
    "marriott.com",
    "aliexpress.com",
    "bedbathandbeyond.com",
    "theverge.com",
    "samsclub.com",
    "okcupid.com",
    "shopify.com",
    "constantcontact.com",
    "battle.net",
    "weebly.com",
    "fandango.com",
    "eventbrite.com",
    "hotels.com",
    "topix.com",
    "whitepages.com",
    "cbssports.com",
    "infusionsoft.com",
    "barclaycardus.com",
    "legacy.com",
    "livejasmin.com",
    "vrbo.com",
    "zendesk.com",
    "gofundme.com",
    "wittyfeed.com",
    "hotnewhiphop.com",
    "cnbc.com",
    "shutterfly.com",
    "breitbart.com",
    "hilton.com",
    "mashable.com",
    "gamefaqs.com",
    "cvs.com",
    "gawker.com",
    "searchincognito.com",
    "media.tumblr.com",
    "citibankonline.com",
    "quizlet.com",
    "umblr.com",
    "rottentomatoes.com",
    "likes.com",
    "medium.com",
    "nba.com",
    "pof.com",
    "booking.com",
    "yellowpages.com",
    "chaturbate.com",
    "time.com",
    "squarespace.com",
    "thedailybeast.com",
    "deadspin.com",
    "wix.com",
    "capitalone360.com",
    "jet.com",
    "nametests.com",
    "engadget.com",
    "kotaku.com",
    "ew.com",
    "evite.com",
    "hp.com",
    "dictionary.com",
    "barnesandnoble.com",
    "telegraph.co.uk",
    "iheart.com",
    "popsugar.com",
    "mailchimp.com",
    "schwab.com",
    "xnxx.com",
    "rei.com",
    "bhphotovideo.com",
    "theodysseyonline.com",
    "list-manage.com",
    "mayoclinic.org",
    "autotrader.com",
    "vox.com",
    "coupons.com",
    "match.com",
    "popads.net",
    "instructables.com",
    "synchronycredit.com",
    "giphy.com",
    "sprint.com",
    "trello.com",
    "fbcdn.net",
    "victoriassecret.com",
    "sephora.com",
    "files.wordpress.com",
    "monster.com",
    "timewarnercable.com",
    "alibaba.com",
    "comenity.net",
    "theatlantic.com",
    "evernote.com",
    "stubhub.com",
    "secureserver.net",
    "directv.com",
    "redtube.com",
    "jezebel.com",
    "hbonow.com",
    "wikimedia.org",
    "nike.com",
    "dailykos.com",
    "marketwatch.com",
    "kbb.com",
    "eonline.com",
    "gamepedia.com",
    "bongacams.com",
    "cbslocal.com",
    "reuters.com",
    "toysrus.com",
    "disney.go.com",
    "ed.gov",
    "cbs.com",
    "bbc.co.uk",
    "icims.com",
    "okta.com",
    "consumerreports.org",
    "opentable.com",
    "upornia.com",
    "secureinternetbank.com",
    "norton.com",
    "dickssportinggoods.com",
    "vanguard.com",
    "concursolutions.com",
    "cracked.com",
    "att.net",
    "bankrate.com",
    "gamespot.com",
    "littlethings.com",
    "4chan.org",
    "dailymotion.com",
    "babycenter.com",
    "speedtest.net",
    "thepennyhoarder.com",
    "dominos.com",
    "pcmag.com",
    "officedepot.com",
    "ibanking-services.com",
    "arstechnica.com",
    "wnd.com",
    "youporn.com",
    "biblegateway.com",
    "food.com",
    "ibm.com",
    "slither.io",
    "livenation.com",
    "si.com",
    "suntrust.com",
    "archiveofourown.org",
    "usnews.com",
    "kissanime.to",
    "starbucks.com",
    "nbcsports.com",
    "chron.com",
    "xbox.com",
    "oracle.com",
    "vistaprint.com",
    "kinja.com",
    "digitaltrends.com",
    "samsung.com",
    "bp.blogspot.com",
    "goodhousekeeping.com",
    "watchtowergaming.com",
    "aarp.org",
    "qualtrics.com",
    "today.com",
    "change.org",
    "skype.com",
    "noaa.gov",
    "hgtv.com",
    "tdbank.com",
    "rr.com",
    "brassring.com",
    "ecollege.com",
    "gamestop.com",
    "urbandictionary.com",
    "twimg.com",
    "chicagotribune.com",
    "playstation.com",
    "custhelp.com",
    "hollywoodreporter.com",
    "jalopnik.com",
    "tvguide.com",
    "msnbc.com",
    "greatergood.com",
    "fanfiction.net",
    "atlassian.net",
    "forever21.com",
    "pbs.org",
    "ny.gov",
    "snopes.com",
    "navyfederal.org",
    "cox.net",
    "cars.com",
    "archive.org",
    "fivethirtyeight.com",
    "livestrong.com",
    "edmunds.com",
    "ssa.gov",
    "rollingstone.com",
    "github.io",
    "messenger.com",
    "hsn.com",
    "bbt.com",
    "realclearpolitics.com",
    "squareup.com",
    "crunchyroll.com",
    "cargurus.com",
    "bodybuilding.com",
    "pixnet.net",
    "smugmug.com",
    "mozilla.org",
    "docusign.net",
    "nymag.com",
    "wired.com",
    "refinery29.com",
    "howtogeek.com",
    "espnfc.us",
    "angieslist.com",
    "foxsports.com",
    "earthlink.net",
    "nexusmods.com",
    "lotterypost.com",
    "tomshardware.com",
    "cisco.com",
    "independent.co.uk",
    "whatsapp.com",
    "geico.com",
    "fool.com",
    "newyorker.com",
    "duckduckgo.com",
    "cabelas.com",
    "photobucket.com",
    "kaiserpermanente.org",
    "mit.edu",
    "usmagazine.com",
    "homeaway.com",
    "backpage.com",
    "office365.com",
    "careerbuilder.com",
    "dealnews.com",
    "libraryreserve.com",
    "iloveoldschoolmusic.com",
    "regions.com",
    "patheos.com",
    "ksl.com",
    "basecamp.com",
    "4dsply.com",
    "pizzahut.com",
    "shutterstock.com",
    "merriam-webster.com",
    "primewire.ag",
    "papajohns.com",
    "qq.com",
    "cloudfront.net",
    "travelocity.com",
    "mysynchrony.com",
    "indiatimes.com",
    "lds.org",
    "bizjournals.com",
    "overdrive.com",
    "khanacademy.org",
    "orbitz.com",
    "theblaze.com",
    "6pm.com",
    "shareasale.com",
    "timeanddate.com",
    "jetblue.com",
    "slideshare.net",
    "state.gov",
    "redbox.com",
    "azlyrics.com",
    "state.tx.us"
];

const LIST_NAME = 'ahrefs';
const LAST_UPDATE_KEY = 'lastUpdate';
const TIMEDELTA_MS = 1000 * 10;
const PERIODIC_ALARM_LABEL = 'periodic-alarm';

async function handleStartup() {
    console.debug('Loading the extension');

    if (shouldTrigger()) {
        console.debug('Trigger processing of history at the start of the browser');
        processHistory();
    }

    setAlarms();

    console.debug('Startup process finished succesfully')
}

async function shouldTrigger() {
    // @todo: when to run the next run (?) - (only for finished previous day)
    // work with the end of the previous day 

    // const interval = 1000 * 60 * 60 * 24; // 24 hours
    // let startOfDay = Math.floor(Date.now() / interval) * interval;
    // let endOfDay = startOfDay + interval - 1; // 23:59:59:9999

    const currentTimestamp = Date.now();
    const lastUpdate = await browser.storage.local.get(LAST_UPDATE_KEY).lastUpdate;

    if (lastUpdate === undefined) {
        return true;
    } else {
        return ((lastUpdate + TIMEDELTA_MS) < currentTimestamp);
    }
}

async function setAlarms() {
    console.debug('Setting up the periodic alarm');

    await browser.alarms.clear(PERIODIC_ALARM_LABEL);
    // @todo: use TIMEDELTA_MS later on
    await browser.alarms.create(PERIODIC_ALARM_LABEL, {
        periodInMinutes: 1,
    });

    browser.alarms.onAlarm.addListener((alarmInfo) => {
        if (alarmInfo.name !== PERIODIC_ALARM_LABEL) {
            return;
        }

        console.debug('Trigger processing of history via the periodic alarm');
        processHistory();
    });
}

function processHistory() {
    // @todo: take larger number of visits of domain/www.domain.com for same URL

    // @todo: data for yesterday (via startTime)
    const searching = browser.history.search(
        {
            text: '',
            startTime: '2020-10-01',
            // endTime: ''
            // limit: 1000
        }
    )

    searching.then((history) => {
        // remove automatic redirection http->https
        const visitedPagesMap = {};
        history.map((item) => {
            const urlPage = item.url.replace(/^.*:\/\//, '');
            if (!(Object.keys(visitedPagesMap)).includes(urlPage)) {
                visitedPagesMap[urlPage] = item;
                visitedPagesMap[urlPage].url = urlPage;
            } else {
                // if the page is in history with both http/https take the bigger value
                // @todo: does visitCount work with global history or filtered one
                //  if it is global history than we have to count it only once
                if (visitedPagesMap[urlPage].visitCount < item.visitCount) {
                    visitedPagesMap[urlPage].visitCount = item.visitCount;
                }
            }
        });

        // get domain name from the complete URL
        const visitedDomainNames = Object.keys(visitedPagesMap).map((item) => {
            return visitedPagesMap[item].url.replace(/\/.*/, '');
        })

        // get count of visits for individual domains
        // @todo: work with visitCount of item (?)
        const visitsPerDomain = visitedDomainNames.reduce(
            (a, b) => {
                a[b] = typeof (a[b]) !== 'undefined' ? a[b] + 1 : 1;
                return a;
            },
            {}
        );

        // @todo: are there any domains in the list that are prefix of any other

        // get ratio of visits for each domain from the sitelist
        const visitedListMap = siteList[LIST_NAME].map((serverName) => {
            const validDomains = Object.keys(visitsPerDomain).filter((domain) => {
                return domain.endsWith(serverName);
            })

            let visitsPerSite = 0;
            for (const domain of validDomains) {
                if (validDomains.includes('www.' + domain)) {
                    visitsPerSite += Math.max(
                        visitsPerDomain[domain],
                        visitsPerDomain['www.' + domain]
                    )
                } else if (domain.startsWith('www.') && validDomains.includes(domain.substr(4))) {
                    // This option is already covered, so we will not use this record
                } else {
                    visitsPerSite += visitsPerDomain[domain];
                }
            }

            return visitsPerSite;
        });

        const totalVisits = Object.keys(visitedListMap).reduce((a, b) => {
            return a + visitedListMap[b];
        }, 0);

        if (totalVisits === 0) {
            // @todo: what to do if histogram cannot be created (?) - sum cannot be one
            return;
        }

        const ratioVisitedListMap = visitedListMap.map((item) => {
            return Math.round(ROUND_DECIMALS * item / totalVisits) / ROUND_DECIMALS;
        })

        console.log(ratioVisitedListMap);

        browser.storage.local.set({ LAST_UPDATE_KEY: Date.now() });
    })
}

//@note: does not work in debug mode because module is loaded after browser is started
//browser.runtime.onStartup.addListener(handleStartup);
browser.runtime.onInstalled.addListener(handleStartup);

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

const LIST_NAME = 'ahrefs';

function handleStartup() {
    // @todo: data for yesterday (now today)
    const searching = browser.history.search(
        {
            text: '',
            limit: 1000,
        }
    )

    searching.then((history) => {
        // get domain name from the complete URL
        const visitedDomainNames = history.map((item) => {
            return item.url.replace(/^.*:\/\//, '').replace(/\/.*/, '').replace(/(.*\.)?([^.]*\..*$)/, '$2');
        })

        // get count of visits for individual domains
        const visitsPerDomain = visitedDomainNames.reduce(
            (a, b) => {
                a[b] = typeof (a[b]) !== 'undefined' ? a[b] + 1 : 1;
                return a;
            },
            {}
        );

        // sum of all visits
        // const totalVisits = visitedDomainNames.length;

        // sum of sitelist visits
        const totalVisits = siteList[LIST_NAME].reduce((a, b) => {
            return a + ((b in visitsPerDomain) ? visitsPerDomain[b] : 0);
        }, 0);

        // get ratio of visits for each domain from the sitelist
        const ratioVisitedListMap = siteList[LIST_NAME].map((serverName) => {
            if (serverName in visitsPerDomain) {
                return Math.round(ROUND_DECIMALS * visitsPerDomain[serverName] / totalVisits) / ROUND_DECIMALS;
            } else {
                return 0;
            }
        });

        console.log(ratioVisitedListMap);
    })
}

//@note: does not work in debug mode because module is loaded after browser is started
//browser.runtime.onStartup.addListener(handleStartup);
browser.runtime.onInstalled.addListener(handleStartup);

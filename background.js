chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        var urlObj = new URL(tab.url);
        var hostname = urlObj.hostname;
        if (hostname.startsWith("ip-")) {
            var ip = hostname.substring(hostname.indexOf("-") + 1, hostname.indexOf(".")).split('-').join(".");
            var newUrl = tab.url.replace(hostname,ip)
            chrome.tabs.update(tabId, { url: newUrl });
        }
    });
    sendResponse();
});


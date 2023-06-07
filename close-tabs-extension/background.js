chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, { file: "closeTabs.js" });
  });
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.closeTabs) {
      chrome.tabs.query({ currentWindow: true }, function(tabs) {
        var numTabs = request.closeTabs;
        var numTabsToClose = Math.min(numTabs, tabs.length);
  
        for (var i = tabs.length - 1; i >= tabs.length - numTabsToClose; i--) {
          chrome.tabs.remove(tabs[i].id);
        }
  
        sendResponse({ message: "Tabs closed successfully." });
      });
    }
  
    return true;
  });
  
// Retrieve the number of tabs to close from the background script
chrome.runtime.sendMessage({ closeTabs: null }, function(response) {
    var numTabs = response.closeTabs;
  
    // Close tabs from the last opened to recently opened
    chrome.tabs.query({ currentWindow: true }, function(tabs) {
      var numTabsToClose = Math.min(numTabs, tabs.length);
  
      for (var i = tabs.length - 1; i >= tabs.length - numTabsToClose; i--) {
        chrome.tabs.remove(tabs[i].id);
      }
    });
  });
  
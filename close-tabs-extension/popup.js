document.addEventListener("DOMContentLoaded", function() {
    var closeTabsButton = document.getElementById("closeTabs");
    closeTabsButton.addEventListener("click", function() {
      var numTabsInput = document.getElementById("numTabs");
      var numTabs = parseInt(numTabsInput.value);
  
      chrome.runtime.sendMessage({ closeTabs: numTabs }, function(response) {
        console.log(response.message);
      });
    });
  });
  
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('fetchTitleButton');
    button.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        var tabTitle = tab.title;
        document.getElementById('tabTitle').textContent = tabTitle;
      });
    });
  });
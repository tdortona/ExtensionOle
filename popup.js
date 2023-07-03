
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btnShowBoca').addEventListener('click', () => {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
          chrome.tabs.sendMessage(tabs[0].id, {action: 'showBoca'});
        });
      });
      
      document.getElementById('btnHideBoca').addEventListener('click', () => {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
          chrome.tabs.sendMessage(tabs[0].id, {action: 'hideBoca'});
        });
      });
      
      document.getElementById('btnShowRiver').addEventListener('click', () => {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
          chrome.tabs.sendMessage(tabs[0].id, {action: 'showRiver'});
        });
      });
      
      document.getElementById('btnHideRiver').addEventListener('click', () => {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
          chrome.tabs.sendMessage(tabs[0].id, {action: 'hideRiver'});
        });
      });
  });
  
chrome.runtime.onConnect.addListener(connection => {
  connection.onMessage.addListener(message => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      tabs => {
        chrome.tabs.sendMessage(tabs[0].id, message);
      }
    )
  });
});

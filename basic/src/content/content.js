chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'SET_PAGE_COLOR') {
    document.body.style.backgroundColor = message.color
  }
});
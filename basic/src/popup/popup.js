const chromeBackgroundConnection = chrome.runtime.connect();

document
  .getElementById('page-color-button')
  .addEventListener('click', () => {
    chromeBackgroundConnection.postMessage({type: 'SET_PAGE_COLOR', color: 'pink'});
  });

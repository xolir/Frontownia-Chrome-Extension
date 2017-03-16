import { fetchMeetingsData } from '../background/actions/actions'

const chromeBackgroundConnection = chrome.runtime.connect();

document
  .getElementById('get-data-button')
  .addEventListener('click', () => {
    const fetchDataMessage = fetchMeetingsData();
    chromeBackgroundConnection.postMessage(fetchDataMessage);
  });

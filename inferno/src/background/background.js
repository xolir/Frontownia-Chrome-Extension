import { store } from './store/store';

import { PAGE_LOAD_COMPLETED_STATUS } from './constants/constants';
import { logUserPage } from './actions/actions';

let connectedPorts = [];

store.subscribe(() => {
  connectedPorts.forEach((port) => {
    port.postMessage(store.getState());
  });
});

chrome.runtime.onConnect.addListener((newPort) => {
  connectedPorts.push(newPort);

  newPort.postMessage(store.getState());

  newPort.onMessage.addListener((action) => {
    store.dispatch(action);
  });

  newPort.onDisconnect.addListener(() => {
    connectedPorts = connectedPorts.filter(
      port => newPort.sender.tab
          ? port.sender.tab.id !== newPort.sender.tab.id
          : port.sender.url !== newPort.sender.url
    );
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === PAGE_LOAD_COMPLETED_STATUS) {
    store.dispatch(logUserPage(tab.url))
  }
});

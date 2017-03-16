import { store } from './store/store';

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
    console.log('dispatching action', action);
    store.dispatch(action);
  });

  newPort.onDisconnect.addListener(() => {
    connectedPorts = connectedPorts.filter(
      port => port.sender.tab.id !== newPort.sender.tab.id
    );
  });
});

import { store } from './store/store';

let connectedPorts = [];

store.subscribe(() => {
  console.log(connectedPorts);
  connectedPorts.forEach((port) => {
    console.log(port);
    port.postMessage(store.getState());
  });
});

chrome.runtime.onConnect.addListener((newPort) => {
  console.log('connected ports', connectedPorts);
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

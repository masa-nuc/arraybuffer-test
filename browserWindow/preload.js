const { ipcRenderer } = require('electron');
const { testMemoryUsage } = require('../common/testMemoryUsage');

window.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.send('rendererInitialized');
});

ipcRenderer.on('runTest', (event, arg) => {
  const { env, opt } = arg;

  // test at electron browser window
  const logs = testMemoryUsage(env, opt);

  ipcRenderer.send('testResult', { logs });
});

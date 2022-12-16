const { ipcRenderer } = require('electron');
const { testArrayBufferUsage, testWasmMemoryUsage, formatMem } = require('../common/testMemoryUsage');

window.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.send('rendererInitialized');
});

ipcRenderer.on('runTest', (event, arg) => {
  const { env, opt } = arg;

  // test at electron browser window
  testArrayBufferUsage(env, opt);
  const logs = testWasmMemoryUsage(env, opt);

  ipcRenderer.send('testResult', { logs });
});

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const { testMemoryUsage } = require('./common/testMemoryUsage');

let mainWindow = null;

const makeEnvText = header => `${header}, Electron:${process.versions.electron}, Node:${process.versions.node}, Chrome:${process.versions.chrome}`;

app.on('window-all-closed', function () {
  app.quit();
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'browserWindow', 'preload.js'),
    },
    width: 100,
    height: 100,
  });
  mainWindow.loadURL('file://' + __dirname + '/browserWindow/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});

ipcMain.on('rendererInitialized', event => {
  const env = makeEnvText('Browser Win ');
  const total = process.argv.length >= 3 ? parseInt(process.argv[2], 10) : 1;
  const chunk = process.argv.length >= 4 ? parseInt(process.argv[3], 10) : 1;

  event.reply('runTest', { env, opt: { total, chunk } });
});

ipcMain.on('testResult', (event, arg) => {
  const { logs } = arg;

  logs.forEach(log => {
    console.log(log);
  });

  // test at electron main process
  const env = makeEnvText('Main Process');
  testMemoryUsage(env);

  mainWindow.close();
});

const { app } = require('electron');
const { testMemoryUsage } = require('./common/testMemoryUsage');

app.on('ready', function () {
  const env = `Electron:${process.versions.electron}, Node:${process.versions.node}, Chrome:${process.versions.chrome}`;
  console.log(`=== ${env} ===`);

  testMemoryUsage(env);

  app.quit();
});

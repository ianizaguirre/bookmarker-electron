//const electron = require('electron');

//console.log(Object.keys(electron));


const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 600,
    show: false
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
});


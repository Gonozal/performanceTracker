/* eslint global-require: 0, flowtype-errors/show-errors: 0 */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 *
 * @flow
 */
import { app, BrowserWindow, ipcMain } from 'electron';
import Store  from 'electron-store';
import path from 'path';

import MenuBuilder from './menu';

const store = new Store();

let mainWindow = null;
let inputWindow = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (
  process.env.NODE_ENV === 'development' ||
  process.env.DEBUG_PROD === 'true'
) {
  require('electron-debug')();
  const p = path.join(__dirname, '..', 'app', 'node_modules');
  require('module').globalPaths.push(p);
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

/**
 *  Window Communication
 */

ipcMain.on("submitMatch", (event, newMatch) => {
  mainWindow.webContents.send('addNewMatch', newMatch);
});
ipcMain.on("saveMatchHistory", (event, matchHistory) => {
  if(matchHistory.length === 0){ return }
  store.set('matchHistory', matchHistory);
  store.set('currentSr', matchHistory[matchHistory.length - 1].newSr);
});
ipcMain.on("startSrChanged", (event, startSr: number) => {
  const matchHistory = store.get('matchHistory');
  if((matchHistory || []).length === 0) { store.set('currentSr', startSr) }
  mainWindow.webContents.send('startSrChanged');
});
ipcMain.on("eraseMatchHistory", () => {
  console.log("erasing match history");
  store.set('matchHistory', []);
  mainWindow.webContents.send('erasedMatchHistory');
});

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', async () => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
  ) {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    show: false,
    width: 1200,
    height: 728
  });

  inputWindow = new BrowserWindow({
    show: false,
    width: 500,
    height: 450,
    title: "Add Competitive Result",
    frame: false
  });
  inputWindow.on('close', (event) => {
    inputWindow.hide();
    event.preventDefault();
  });


  mainWindow.setMinimumSize(1200, 728);


  mainWindow.loadURL(`file://${__dirname}/app.html`);

  // @TODO: Use 'ready-to-show' event
  // https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  inputWindow.on('hide', () => {
    mainWindow.focus()
  });

  const menuBuilder = new MenuBuilder(mainWindow, inputWindow);
  menuBuilder.buildMenu();
});

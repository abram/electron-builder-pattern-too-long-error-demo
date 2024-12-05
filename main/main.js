const { app, nativeTheme, ipcMain, webContents, protocol, crashReporter, BrowserWindow } = require('electron')
const log = require('electron-log')
console.log = log.log;
const PubSub = require('pubsub-js')
const fs = require('fs')
const path = require('path')
const url = require('url')

const isDevelopment = !app.isPackaged;

app.whenReady().then(async ()=>{
    // Create  new window
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
        }
    })
    mainWindow.loadFile('dist/hello.html')
});



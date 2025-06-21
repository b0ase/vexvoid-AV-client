const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');
const remoteMain = require('@electron/remote/main');

remoteMain.initialize();

let outputWindow = null;
let controlWindow = null;

function createOutputWindow() {
  // Get all displays
  const displays = screen.getAllDisplays();
  const primaryDisplay = screen.getPrimaryDisplay();
  
  // Use secondary display if available, otherwise primary
  const targetDisplay = displays.length > 1 ? displays.find(d => d.id !== primaryDisplay.id) : primaryDisplay;
  
  outputWindow = new BrowserWindow({
    width: targetDisplay.workAreaSize.width,
    height: targetDisplay.workAreaSize.height,
    x: targetDisplay.bounds.x,
    y: targetDisplay.bounds.y,
    title: 'V3XV0ID AV Client - Output',
    fullscreen: true,
    show: false, // Don't show until ready
    backgroundColor: '#000000', // Start with black background
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
  });

  outputWindow.loadFile(path.join(__dirname, 'index.html'));
  remoteMain.enable(outputWindow.webContents);
  
  // Show only when ready to prevent white flash
  outputWindow.once('ready-to-show', () => {
    outputWindow.setFullScreen(true);
    outputWindow.show();
  });
  
  outputWindow.on('closed', () => {
    outputWindow = null;
  });
}

function createControlWindow() {
  const primaryDisplay = screen.getPrimaryDisplay();
  
  controlWindow = new BrowserWindow({
    width: primaryDisplay.workAreaSize.width,
    height: primaryDisplay.workAreaSize.height,
    x: primaryDisplay.bounds.x,
    y: primaryDisplay.bounds.y,
    title: 'V3XV0ID AV Client - Controls',
    fullscreen: true,
    backgroundColor: '#000000',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
  });

  controlWindow.loadFile(path.join(__dirname, 'controls.html'));
  remoteMain.enable(controlWindow.webContents);
  
  // Ensure fullscreen after loading
  controlWindow.once('ready-to-show', () => {
    controlWindow.setFullScreen(true);
  });
  
  controlWindow.on('closed', () => {
    controlWindow = null;
  });
}

// IPC Communication between windows
ipcMain.on('control-to-output', (event, message) => {
  if (outputWindow && outputWindow.webContents) {
    outputWindow.webContents.send('control-command', message);
  }
});

ipcMain.on('output-to-control', (event, message) => {
  if (controlWindow && controlWindow.webContents) {
    controlWindow.webContents.send('output-message', message);
  }
});

app.whenReady().then(() => {
  createOutputWindow();
  createControlWindow();
  
  // Register global shortcuts for fullscreen control
  const { globalShortcut } = require('electron');
  
  // F11 to toggle fullscreen on focused window
  globalShortcut.register('F11', () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
      focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
    }
  });
  
  // Escape to exit fullscreen on focused window
  globalShortcut.register('Escape', () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow && focusedWindow.isFullScreen()) {
      focusedWindow.setFullScreen(false);
    }
  });
});

app.on('window-all-closed', () => {
  // Unregister all shortcuts when closing
  const { globalShortcut } = require('electron');
  globalShortcut.unregisterAll();
  
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createOutputWindow();
    createControlWindow();
  }
}); 
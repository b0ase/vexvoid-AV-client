const { app, BrowserWindow, ipcMain, screen, desktopCapturer, dialog } = require('electron');
const path = require('path');
const remoteMain = require('@electron/remote/main');

remoteMain.initialize();

// The VX engine's clip deck and sound engine start without a click in the output window
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

let outputWindow = null;
let controlWindow = null;

// One mixer per profile: a second copy would fight over the API port and the output display
const firstInstance = app.requestSingleInstanceLock();
if (!firstInstance) {
  app.quit();
} else {
  app.on('second-instance', () => { if (controlWindow) { if (controlWindow.isMinimized()) controlWindow.restore(); controlWindow.focus(); } });
}

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
    // outputWindow.webContents.openDevTools({ mode: 'detach' });
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
    // controlWindow.webContents.openDevTools({ mode: 'detach' });
  });
  
  controlWindow.on('closed', () => {
    controlWindow = null;
  });
}

// Live monitor for the controls window: a small JPEG of the real output (no screen-recording permission needed)
ipcMain.handle('output-frame', async (event, width) => {
  if (!outputWindow || outputWindow.isDestroyed()) return null;
  const img = await outputWindow.webContents.capturePage();
  if (img.isEmpty()) return null;
  return img.resize({ width: Math.max(160, Math.min(1280, width || 854)) }).toJPEG(72).toString('base64');
});

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

// Recording: get output window source ID for desktopCapturer
ipcMain.handle('get-output-source-id', async () => {
  if (!outputWindow) return null;
  const sources = await desktopCapturer.getSources({
    types: ['window'],
    thumbnailSize: { width: 0, height: 0 }
  });
  const outputSource = sources.find(s => {
    // Match by window title or webContents id
    return s.name === 'V3XV0ID AV Client - Output' ||
           s.id === `window:${outputWindow.id}:0`;
  });
  return outputSource ? outputSource.id : null;
});

// Recording: save dialog
ipcMain.handle('show-save-dialog', async (event, options) => {
  const result = await dialog.showSaveDialog(controlWindow, options);
  return result;
});

// bWalletX pairing relay: the controls window loads from file://, which the relay refuses (it takes only https
// origins). A native app declares a fixed origin instead, as the bwalletx CLI does (Origin: https://cli.bwalletx.com).
// APP_ORIGIN is an app identity, like the CLI's CLI_ORIGIN: fixed, never taken from page content or user input, sent
// only to relay.bwallet.space, and the same value vx/wallet.js passes to pairBwalletX (agreed with the bWalletX
// session, 13 Nov 2026). A separate host from the web mixer keeps the phone's per-origin permissions apart.
const APP_ORIGIN = 'https://desktop.mixer.vexvoid.com';
const PAIRING_RELAY = 'relay.bwallet.space';

app.whenReady().then(() => {
  if (!firstInstance) return;
  const { session } = require('electron');
  session.defaultSession.webRequest.onBeforeSendHeaders({ urls: ['wss://' + PAIRING_RELAY + '/*'] }, (details, done) => {
    const headers = details.requestHeaders;
    if (new URL(details.url).hostname === PAIRING_RELAY) {
      for (const k of Object.keys(headers)) if (k.toLowerCase() === 'origin') delete headers[k];
      headers.Origin = APP_ORIGIN; // app identity, see APP_ORIGIN
    }
    done({ requestHeaders: headers });
  });
  createOutputWindow();
  createControlWindow();

  // Local control API for the CLI, MCP server and other tools (127.0.0.1, token in ~/.v3xv0id/api.json)
  const api = require('./api-server').start({ getControlWindow: () => controlWindow, getOutputWindow: () => outputWindow });
  // claude.ai link through the relay (off until the performer turns it on in the controls window)
  require('./relay-link').start({ run: api.run, getOutputWindow: () => outputWindow, getControlWindow: () => controlWindow });
  
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
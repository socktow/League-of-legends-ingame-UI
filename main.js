const { app, BrowserWindow } = require('electron');
const path = require('path');

// Tạo cửa sổ ứng dụng
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile('index.html');
});

// Đóng ứng dụng khi cửa sổ đóng
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

const { app, BrowserWindow } = require("electron");
//PascalCase modules are instantiable class constructors
// (e.g. BrowserWindow, Tray, Notification) whereas camelCase modules are not instantiable
// (e.g. app, ipcRenderer, webContents).
// app controls even lifestyle, browserwindow creates and manages app windows

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

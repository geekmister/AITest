const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // 在这里暴露你需要的 API
});
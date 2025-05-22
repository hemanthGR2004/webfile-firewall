// Block dangerous file types
chrome.downloads.onCreated.addListener((downloadItem) => {
  const dangerousExts = [".exe", ".js", ".bat", ".dll"];
  const isDangerous = dangerousExts.some(ext => downloadItem.url.endsWith(ext));
  
  if (isDangerous) {
    chrome.downloads.cancel({ id: downloadItem.id });
    chrome.notifications.create({
      title: "🚨 Blocked!",
      message: `${downloadItem.filename} looks risky.`
    });
  }
});
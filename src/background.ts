async function handleContextMenuClick(
  info: chrome.contextMenus.OnClickData,
  tab?: chrome.tabs.Tab
) {
  // if (tab) {
  //   await chrome.sidePanel.open({
  //     tabId: tab?.id as number,
  //     windowId: tab?.windowId as number,
  //   });

  // }

  await chrome.runtime.sendMessage({
    action: "upload_image",
    info: info,
  });
}

chrome.contextMenus.onClicked.addListener(handleContextMenuClick);

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: "Track Sustainability",
    contexts: ["image"],
    id: "track_sustainability",
  });
});

export {};

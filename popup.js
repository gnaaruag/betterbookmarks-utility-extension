document.getElementById("fetchBookmarks").addEventListener("click", () => {
	// Send a message to the background script to fetch bookmarks
	chrome.runtime.sendMessage({ action: "fetchBookmarks" });
});
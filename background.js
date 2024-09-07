chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "fetchBookmarks") {
	  // Fetch bookmarks and send to the server
	  chrome.bookmarks.getTree((bookmarkTreeNodes) => {
		fetch('http://localhost:3000/api/get-bookmarks', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(bookmarkTreeNodes),
		}).then(response => {
		  console.log('Bookmarks sent successfully', response);
		}).catch(error => {
		  console.error('Error sending bookmarks:', error);
		});
	  });
	}
  });
  
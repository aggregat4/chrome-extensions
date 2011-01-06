// From http://stackoverflow.com/questions/3767429/button-in-popup-that-get-selected-text-chrome-extension
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSelection")
      sendResponse({data: window.getSelection().toString()});
    else
      sendResponse({});.
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	//console.log("hello there");
    if (request.method == "getLocalStorage")
      sendResponse({
      	execute: localStorage.execute, 
      	img_chb: localStorage.img_chb,
      	link_chb: localStorage.link_chb, 
      	host_url: localStorage.host_url,
        username: localStorage.username,
        password: localStorage.password,
      });
    else
      sendResponse({}); // snub them.
});
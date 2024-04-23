var Tawk_API = Tawk_API || {};
window.Tawk_API.onLoad = function () {
    window.Tawk_API.maximize();
};

window.Tawk_API.onChatMaximized = function () {
    function checkButtonVisibility() {
    var iframes = document.getElementsByTagName('iframe');
    var numberOfIframes = iframes.length;
    if (numberOfIframes == 4) {
        console.log(numberOfIframes);
        clearInterval(intervalId);
        addClassToFrames();
    }
    else {
        console.log('No Iframe');
    }
    }
    var intervalId = setInterval(checkButtonVisibility, 10);
};
Tawk_API.customStyle = {
    zIndex: 902,
    visibility: {
    desktop: {
        position: 'cl',
        xOffset: 130,
        yOffset: 130
    },
    mobile: {
        position: 'br',
        xOffset: 80,
        yOffset: 62
    }
    }
};
var Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/651320f8b1aaa13b7a7916ec/1hb9bhjqq';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();









//============================================================================================================================
function removeSubstring(inputString, substringToRemove) {
    var regex = new RegExp(substringToRemove, 'g');
    var resultString = inputString.replace(regex, '');
    return resultString;
}

function addClassToFrames() {
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; i++) {
        if (i == 1) {
			// var modifiedString = removeSubstring(iframes[i].getAttribute("style"), "!important");
			// iframes[i].style.cssText = modifiedString;
			iframes[i].removeAttribute("style");
			iframes[i].classList.add('chatFrame');
        }
    }
	
	var elements = document.getElementsByClassName('widget-visible');
	//console.log(elements);
	// If there are multiple elements with the class, loop through them
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		// Get the id of the element
		var id = element.id;
		console.log(id);
		var targetElement = document.getElementById(id);
		console.log(targetElement);
		// Change the CSS property of the element
		if (window.matchMedia("(min-width: 991px)").matches) {
			targetElement.setAttribute('style', 'position: static !important'); // Change color to red as an example
		}
	}		
}

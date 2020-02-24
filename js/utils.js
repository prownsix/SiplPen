// Utility functions
ZenPen = window.ZenPen || {};
ZenPen.util = (function() {

	function supportsHtmlStorage() {
		try {
		    return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
		    return false;
		}
	};

	function getText(el) {
		var ret = " ";
		var length = el.childNodes.length;
		for(var i = 0; i < length; i++) {
		    var node = el.childNodes[i];
		    if(node.nodeType != 8) {

			if ( node.nodeType != 1 ) {
			    // Strip white space.
			    ret += node.nodeValue;
			} else {
			    ret += getText( node );
			}
		    }
		}
		return ZenPen.util.trim(ret);
	};

	function trim(string) { 
		return string.replace(/^\s+|\s+$/g, ''); 
	};
    
    function fadeIn(element){
    element.style.opacity = 0;
    element.style.transition = "opacity 0.5s";
    element.style.display = "block";
    setTimeout(function () {
                element.style.opacity = 1;},50);
    setTimeout(function () {
        element.style.transition = "";
    },500);
    //element.style.opacity = 1;
    }

    function fadeOut(element){
    element.style.opacity = 1;
    element.style.transition = "opacity 0.5s";
    setTimeout(function () {
        element.style.display = "none";
        element.style.transition = "";
    },500);
    element.style.opacity = 0;
    }

	return {
		trim: trim,
		getText: getText,
		supportsHtmlStorage: supportsHtmlStorage,
        fadeIn:fadeIn,
        fadeOut:fadeOut,
	}

})()

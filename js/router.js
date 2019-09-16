/*-----------------------------------------------------------------------------
 file: $MAIN/js/router.js

 revision history:
  20190908 (TE): initial version

 This file is router for the YouNews page
-----------------------------------------------------------------------------*/
function router(params) {

    /* given or default starting path */
    /*                                */
    var startingPath = params.startingPath || '/home';

    /* given or default content id */
    /*                             */
    var contentId = params.contentId || 'content';
    

    /* if no route array was provided... */
    /*                                   */
    if(!params.routeArray || params.routeArray[0]){
	console.log("must specify array with at least one element");
	return;
    }

    /* set the routes */
    /*                */
    var routes = params.routeArray;

    /* function to properly route to proper page */
    /*                                           */
    function route(){

	/* get the path after the '#' */
	/*                            */
	var path = location.hash.slice(1) || '/';
	console.log('attempting to route to path: ' + path);

	/* if this is an invalid route */
	/*                             */
	if(!routes[path]){
	    document.getElementById(contentId).innerHTML = "Error: link '" + path +
		"' was never added to the routing.";
	} else {

	    /* remove the active class */
	    /*                         */
	    var links = document.getElementsByClassName("nav-item");
	    for(var link = 0; link < links.length; link++){
		if(links[link].firstElementChild.classList.contains("active")){
		    links[link].firstElementChild.classList.remove("active");
		    break;
		}
	    }

	    /* add the active class to the current page */
	    /*                                          */
	    document.getElementsByClassName(path.slice(1))[0].classList.add("active");

	    /* route to the proper path, passing the contentId argument */
	    /*                                                          */
	    routes[path](contentId);
	}
    }

    /* event listener for whenever a new route is requested */
    /*                                                      */
    window.addEventListener('hashchange', route);

    /* set the current location hash to starting path */
    /*                                                */
    window.location.hash = startingPath;
    return;
}

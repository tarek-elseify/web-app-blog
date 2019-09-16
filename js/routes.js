/*-----------------------------------------------------------------------------
 file: $MAIN/js/routes.js

 revision history:
  20190908 (TE): initial version

 This file contains the routes for the YouNews page
-----------------------------------------------------------------------------*/
"use strict";

/* create the routes object */
/*                          */
var routes = [];
routes['/'] = home;
routes['/home'] = home;
routes['/news'] = news;
routes['/blog'] = blog;

/* run the router */
/*                */
router({routeArray: routes,
	contentId: "content"
       });

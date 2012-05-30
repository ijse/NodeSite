/**
 * Show Message
 * @author ijse
 */
 
 exports.index = function(req, res, next) {
	var accept = req.headers.accept || '';
 	var msg = res.local("message");
 	if(typeof msg !== "undefined") {
 		if (~accept.indexOf('html')) {
	 		// Show message view
	 		res.render("msg");
	 	} else if (~accept.indexOf('json')) {
	 		var json = JSON.stringify(msg);
	        res.setHeader('Content-Type', 'application/json');
	        res.end(json);
	 	} else {
	 		var txt = msg.title + ":" + msg.content;
	 		res.setHeader('Content-Type','text/plain');
	 		res.end(txt);
	 	}
 	} else {
 		next();
 	}
 }
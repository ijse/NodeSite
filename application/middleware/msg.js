/**
 * Show Message
 * @author ijse
 */

 exports.index = function(req, res, next) {

 	var msg = res.local("message");
 	if(typeof msg !== "undefined") {
 		// Show message view
 		res.render("msg");
 	} else {
 		next();
 	}
 }
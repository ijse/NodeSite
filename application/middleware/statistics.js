/**
 * Do some site statistics 
 * @author ijse
 */
var num = 0;
exports.index = function(req, res, next) {
	//TODO: Node.js Logger Plugin
	// console.log("STATICS: num = " + (num++));
	// console.log("STATICS: server_start_time = " + START_TIME);
	// console.log("STATICS: server_run_time = " + (new Date() - START_TIME));

	//TODO: Static for website log
	
	next();
}
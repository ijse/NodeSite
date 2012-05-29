/**
 * Auth middlewares
 * @author ijse
 */

 exports.index = function(req, res, next) {
 	var path = req.path;
 	var method = req.method;
 	next();
 }

 function checkAuthority(req, res) {
 	//Do check authority

 	return false;
 }

var Varify = function(opt, foo) {
	
}

 var varify = {
 	"all": [
 		{
 			"pattern": /\/.*/,
 			"message": "Not allowed!",
 			"statusCode": 403,
 			"view": "",
 			"viewParam": {},
 			"checkFunc": function(req, res) {
 				return false;
 			}
 		}
 	]
 }
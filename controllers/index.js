
/**
 * Entry for controllers
 */

var fs = require("fs");
var config = require("../config.js");

module.exports = function(app) {
	var controllerList = fs.readdirSync(config.Dirs.controllers);
	controllerList.forEach(function(item, index, arr) {
		if(item === "index.js") return;
	    require(config.Dirs.controllers + "/" + item)(app);
	})
}

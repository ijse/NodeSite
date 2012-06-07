/**
 * Entry for models
 */
var fs = require("fs");
module.exports = function(mongoose) {

	fs.readdirSync(__dirname).forEach(function(item, index, arr) {
		if(item === "index.js") return ;
		var model = require("./" + item);
		mongoose.model(item.replace(/Model\.js$/, ''), model);
	});

}
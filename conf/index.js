/**
 * Configuration Entry Class
 */
var appConfig = require("./app.json");
module.exports.getConfig = function(key) {

}

util.extend(exports, {
	dbUrl: "localhost:27017/testdb",

	baseUrl: "/"
})
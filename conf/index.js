/**
 * Configuration Entry Class
 */
var appConfig = require("./app.json");
module.exports.getConfig = function(key) {

}

util.extend(exports, {
	siteName: "node.ijser.cn",
	dbUrl: "localhost:27017/testdb",
	baseUrl: "/",
	sessionSecret: 'My Secret string for session'
})
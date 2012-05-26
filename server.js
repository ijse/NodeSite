/**
 * Some Global Configuration
 * @author ijse
 * @date 2012-05-23
 */

/**
 * Global Modules
 */
global.express = require("express");
global.path = require("path");
global.url = require("url");
global.util = require("underscore");
global.sysutil = require("util");
global.mongo = require('mongoskin');

/**
 * Global Variables
 */
global.BASE_DIR 	= __dirname;
global.BASE_URL		= "/";
global.APP_DIR      = global.BASE_DIR + "/application/";
global.COMMON_DIR	= global.APP_DIR + "/common/";
global.CON_DIR      = global.APP_DIR + "/controller/";
global.CORE_DIR     = global.APP_DIR + "/core/";
global.MODEL_DIR    = global.APP_DIR + "/model/";
global.CONF_DIR     = global.BASE_DIR + "/conf/";
global.LOG_DIR      = global.BASE_DIR + "/log/";
global.PUBLIC_DIR   = global.BASE_DIR + "/public/";
global.VIEW_DIR     = global.BASE_DIR + "/views/";
global.DB = mongo.db('localhost:27017/testdb'); // MongoDB instance
global.START_TIME	= new Date();

global.util.extendfn = require(COMMON_DIR + "jsextend.js").extend;

global.util.ObjectId = function(hex) {
	return DB.bson_serializer.ObjectID.createFromHexString(hex);
}
global.app = require(CORE_DIR + "app.js");
global.model = require(MODEL_DIR);
var routes = require("./routes");

// Start listening...
app.listen(80, function() {
	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

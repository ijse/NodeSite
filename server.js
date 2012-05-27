/**
 * Some global initialization
 * @author ijse
 * @date 2012-05-23
 */

/**
 * Global Variables
 */
global.BASE_DIR 	= __dirname;
global.START_TIME	= new Date();
global.APP_DIR      = global.BASE_DIR + "/application/";
global.COMMON_DIR	= global.APP_DIR + "/common/";
global.CON_DIR      = global.APP_DIR + "/controller/";
global.MIDWARE_DIR	= global.APP_DIR + "/middleware/";
global.CORE_DIR     = global.APP_DIR + "/core/";
global.MODEL_DIR    = global.APP_DIR + "/model/";
global.CONF_DIR     = global.BASE_DIR + "/conf/";
global.LOG_DIR      = global.BASE_DIR + "/log/";
global.PUBLIC_DIR   = global.BASE_DIR + "/public/";
global.VIEW_DIR     = global.BASE_DIR + "/views/";

/**
 * Global Modules
 */
global.express 	= require("express");
global.path 	= require("path");
global.url 		= require("url");
global.sysutil 	= require("util");
global.mongo 	= require('mongoskin');

global.util 	= require(COMMON_DIR).index;
global.model 	= require(MODEL_DIR);

// Load configurations
global.CONFIG 	= require(BASE_DIR + "/conf");
// Config MongoDB
global.DB 		= mongo.db(CONFIG.dbUrl); // MongoDB instance
// Initialize application 
global.app 		= require(CORE_DIR + "app.js");

// Apply routes
require("./routes"); 

// Start listening...
app.listen(80, function() {
	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

/**
 * Routes for request and views
 * 	Load /routes/*.json, read them and apply them.
 * @author ijse
 * @date 2012-05-22
 */

//TODO: Auto import json files
var siteRoutes = [
	require("./site.json"),
	require("./user.json"),
	require("./common.json")
];

util(siteRoutes).each(function(i,n,arr) {
	util(i).each(function(r) { 
		var controller, method;
		if(util(r.controller).isEmpty()) {
			return ;
		}
		controller = require(CON_DIR + r.controller + ".js");
		if(util(r.method).isEmpty()) {
			method = controller.index;
		} else {
			method = controller[r.method];
		}
		app[r.type](r.pattern, method);
	}) 
});

// JUST FOR TEST
app.get("/test", function(req, res) {
	console.log("\n------------------TEST------------------");
	console.log(util.uniqueId("UniqueId_"));
	//res.send("<a href='http://localhost'>index</a>");
	res.render("test.html");
})
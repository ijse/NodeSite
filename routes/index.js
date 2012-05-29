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
		var pattern = r.pattern;
		if(r.regexp) {
			pattern = new RegExp(r.pattern);
		}
		var handler_queen = [pattern];

		if(util.isArray(r.handler)) {
			util(r.handler).each(function(item, index, arr) {
				var con = require(CON_DIR + item.controller + ".js");
				var fun = con[item.method];
				handler_queen.push(fun);
			})
		}

		app[r.type].apply(app, handler_queen);
	});
});



// JUST FOR TEST
 /*
app.get("/test", function(req, res) {
	console.log("\n------------------TEST------------------");
	console.log(util.uniqueId("UniqueId_"));
	//res.send("<a href='http://localhost'>index</a>");
	res.render("test.html");
})
*/
var common = {
	auth: function(req, res, next){
		console.log("I'm running...");
		next();
	}
}
app.get("/atest", eval("common.auth"), function(req, res) {
	res.send("That's ok!!");
})
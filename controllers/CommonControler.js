/**
 * Common controller
 */
var utils = require("../utils");
module.exports = function(app, middlewares) {
	app.get(/^(\/$|\/index(.html|.htm)?)$/, function(req, res, next) {
		res.local("title", "ExpressSite");

		if(req.param("f") == "true") {
			res.local("message", {
				title: "测试消息",
				content: "内容，，内容！！"
			});
			next();
		} else {
			utils.response(req, res, "index");
		}
	})

}

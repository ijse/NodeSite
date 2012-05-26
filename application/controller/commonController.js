/**
 * [indexHandler description]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */

//var userModel = require("../model/userModel.js");
var thiz = {
	index: function(req, res) {
		res.render('index', {
			title: 'Express'
		});
	},
	test: function(req, res, next) {
		//for test
		var t = model.getModel("SiteModel", {
			name: "ijse",
			age: 13
		});
		debugger;
		t.insert();
		res.send("Fine!!");
	}
}
util.extend(exports, thiz);

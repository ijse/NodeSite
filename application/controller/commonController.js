/**
 * [indexHandler description]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */

var thiz = {
	index: function(req, res) {
		res.render('index', {
			title: 'Express'
		});
	},
	test: function(req, res, next) {
		switch(req.param("testcase")) {
			case "session":
				res.render("msg", {
					"message": {
						title: "Session Test",
						content: "Session:" + req.session.auth +
									" User:" + req.session.userInfo.name,
						url: req.headers.referer
					}
				})
				break;

			case "layout1-1":
				res.render("regist", {
					layout: "layout_1-1"
				})
				break;

			default:
				//for test
				var t = model.getModel("SiteModel", {
					name: "ijse",
					age: 13
				});
				//t.insert();
				//res.send("Fine!!");
				res.local("message", {
					title: "出错啦！！",
					content: "我出个错给您看看。。",
					timeout: 10,
					url: req.headers.referer
				});
				res.local("title", "出错页");
				next();
				break;
		}
		
	}
}
util.extend(exports, thiz);

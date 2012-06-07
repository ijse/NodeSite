/**
 * User Controller
 */
var utils = require("../utils");
var mongoose = require("mongoose");
var UserModel = mongoose.model("User");

module.exports = function(app, middlewares) {
	/**
	 * 用户注册 - 打开注册表单页面
	 * @param  {[type]}   req  [description]
	 * @param  {[type]}   res  [description]
	 * @param  {Function} next [description]
	 * @return {[type]}        [description]
	 */
	app.get("/regist", function(req, res, next) {
		utils.response(req, res, "regist");
	});

	/**
	 * 用户注册 - 处理表单数据
	 * @param  {[type]}   req  [description]
	 * @param  {[type]}   res  [description]
	 * @param  {Function} next [description]
	 * @return {[type]}        [description]
	 */
	app.post("/regist", function(req, res, next) {
		var formData = req.body.user;
		var user = new UserModel(formData);
		user.save(function(err, user) {
			if(err) {
				res.local("message", {
					title: "注册失败",
					content: "插入数据库时失败！",
					url: req.headers.referer
				});
			} else {
				req.session.auth = false;
				req.session.user = user;
				delete req.session.user.pass;
				res.local("message", {
					title: "注册成功",
					content: "正在为您登陆...",
					url: "/login"
				})
			}
			next();
		})
	});

	/**
	 * 用户登陆
	 *
	 * @param  {[type]}   req  [description]
	 * @param  {[type]}   res  [description]
	 * @param  {Function} next [description]
	 * @return {[type]}        [description]
	 */
	app.post("/login", function(req, res, next) {
		var formData = req.body.user;
		if(req.session.auth === false && req.session.user) {
			req.session.auth = true;
			res.local("message", {
				title: "登陆成功",
				content: "正在为您跳转..."
			});
			next();
		}

		UserModel.findOne({
			name: formData.name
		}, function(err, user) {
			if(err) {
				res.local("message", {
					title: "登陆失败",
					content: "用户名不存在"
				});
			} else {
				if(user.pass !== formData.pass) {
					res.local("message", {
						title: "登陆失败",
						content: "密码输入错误"
					});
				} else {
					req.session.auth = true;
					req.session.user = user;
					delete req.session.user.pass;

					res.local("message", {
						title: "登陆成功",
						content: "正在为您跳转..."
					});
				}
			}
			next();
		})
	});

	/**
	 * 用户登出
	 * @param  {[type]}   req  [description]
	 * @param  {[type]}   res  [description]
	 * @param  {Function} next [description]
	 * @return {[type]}        [description]
	 */
	app.get("/logout", function(req, res, next) {
		req.session.auth = false;
		delete req.session.user;
		res.local("message", {
			title: "退出成功",
			content: "正在为您跳转到首页",
			url: "/index"
		});
		next();
	})
};
/**
 * User Controller
 */

var userController = {
	"login": function(req, res, next) {
		var msg = {};
		var loginInfo = req.body.user;
		var userModel = model.getModel("UserModel");
		userModel.login(loginInfo, function(data) {
			if(data == null || data.length === 0) {
				msg = {
					title: "登陆失败",
					content: "用户名不存在！"
				};
			} else if(data.pass !== loginInfo.pass) {
				msg = {
					title: "登陆失败",
					content: "用户密码不正确！"
				}
			} else {
				data.pass = null;
				// Write session
				req.session.auth = true;
				req.session.userInfo = data;

				// Login Success
				msg = {
					title: "登陆成功!",
					content: "将为您跳转至上一页",
					url: req.headers.referer
				}
			}
			res.render("msg", {
				message: msg,
				title: msg.title
			});
		});
	},
	logout: function(req, res, next) {
		req.session.destroy();
		res.render("msg", {
			"message":{
				title: "退出成功！",
				content: "您已经成功退出系统，正在返回上一页"
			}
		});
	},
	/**
	 * 打开注册页面
	 */
	"regist": function(req, res) {
		res.render("regist", {
			title: "用户注册",
			layout: "layout_1-1"
		});
	},
	/**
	 * 处理注册表单信息
	 */
	"doRegist": function(req, res, next) {
		var registInfo = req.body.user;
		var msg = {
			title: "注册失败！",
			url: "regist"
		};
		// Validate
		if(registInfo.name == "" || registInfo.pass == "") {
			msg = {
				content: "用户名或密码不能为空！"
			}
			next();
			return ;
		}
		
		var userModel = model.getModel("UserModel", registInfo);
		userModel.insert(function(err, data) {
			var user = data[0];
			res.local("newUser", user);
			res.local("message", {
				title: "注册成功！",
				timeout: 5,
				content: user.name + ", 欢迎您！ 您的ID是" + user._id,
				url: "/regist"
			});
			res.local("title", "注册成功！");
			next();
		});
	}

}

util.extend(exports, userController);
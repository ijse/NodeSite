/**
 * User Controller
 */

userController = {
	"login": function(req, res, next) {
		var loginInfo = req.body;
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
		if(registInfo.name == "") {
			msg = {

			}
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
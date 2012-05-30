/**
 * Dinner comments or else
 */
var dinnerController = {
	index: function(req, res, next) {
		debugger;
		var dmodel = model.getModel("DinnerCommentModel");
		dmodel.list({
			skip: 0,
			limit: 20,
			sort: [["postTime", "desc"]]
		}, {}, function(err, data) {
			debugger;
			if(!err) {
				res.locals({
					"commentList": data
				});
				res.render("dinner", {
					title: "晚餐吐糟",
					layout: "layout_2-1",
					sidebar: "index"
				});
			} else {
				res.local({
					title: "出错啦",
					content: "查询晚餐吐糟列表时出错了",
					url: "index"
				});
				next();
			}
		});
	},
	comment: function(req, res, next) {
		// Post a new comment to dinner
		var comment = req.body.comment;
		var dmodel = model.getModel("DinnerCommentModel", comment);
		dmodel.insert(comment, function(err, data) {
			if(!err) {
				// success
				console.log(data);
				res.local("comment", data[0]);
				res.render("dinner");
			} else {
				res.local("message", {
					title: "评论失败！",
					content: ""
				});
				next();
			}
		});
	},
	loadComments: function(req, res, next) {
		
		var model = model.getModel("DinnerCommentModel");
		model.list()
	}
}

util.extend(exports, dinnerController);
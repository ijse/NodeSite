/**
 * Post controller
 */

var postController = {
	"add": function(req, res, next) {
		var post = req.body.post;
		if(post.content == "") {
			// 
			var msg  = {
				title: "出错啦",
				content: "您没有输入任何内容！",
				url: ""
			}
		}
		// Save to database
		var postModel = model.getModel("PostModel");

	}
}

util.extend(exports, postController);
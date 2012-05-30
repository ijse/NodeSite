/**
 * Post Model
 */

var PostModel = function(initData) {

	var self = this;
	self.setData = function(data) {
		var post = util.extend({
			cateId: 0,
			parentId: 0,
			upvote: 0,
			downvote: 0,
		}, data);
		self.data = post;
	}
	self.list = function(options, callback) {
		PostModel.superclass.list.call(this, {}, options, callback);
	}

	
	PostModel.superclass.constructor.apply(this, [initData, "post"]);
}

exports.class = PostModel;
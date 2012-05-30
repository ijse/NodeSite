/**
 * User Model
 * 		with some attributes and DAO
 */

var UserModel = function(initData) {
	var self = this;
	self.login = function(user, callback) {
		self.findOne({name: user.name}, function(err, records) {
			callback.call(null, records);
		})
	};
	self.setData = function(data) {
		self.data = util.extend({
			pic: ""
		}, data);
	}

	UserModel.superclass.constructor.apply(this, [initData, "user"]);
}

exports.class = UserModel;

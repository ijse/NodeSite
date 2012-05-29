/**
 * User Model
 * 		with some attributes and DAO
 */

var UserModel = function(initData) {
		UserModel.superclass.constructor.apply(this, [initData, "user"]);
		UserModel.prototype.login = function(name, pass) {

		};
		UserModel.prototype.insert = function(callback) {
			UserModel.superclass.insert.call(this, callback);
		}
	}

exports.class = UserModel;

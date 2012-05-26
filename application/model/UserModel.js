/**
 * User Model
 * 		with some attributes and DAO
 */

var UserModel = function(initData) {
		UserModel.superclass.constructor.apply(this, [initData, "user"]);
		this.prototype.login = function(name, pass) {

		}
	}

exports.class = UserModel;

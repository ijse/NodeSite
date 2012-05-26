/**
 * Site Model
 */

var SiteModel = function(initData) {
	SiteModel.superclass.constructor.apply(this, [initData, "site"]);
	this.list = function(options, callback) {
		SiteModel.superclass.list.call(this, {}, options, callback);
	}
}

exports.class = SiteModel;

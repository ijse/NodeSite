/**
 * Used to get models
 * 
 * @author ijse
 */
var BaseModel = require("./BaseModel.js").class;

exports.getModel = function(name, initData) {
	var ModelClass = require("./" + name + ".js").class;
	ModelClass = util.extendfn(ModelClass, BaseModel);
	return new ModelClass(initData);
}



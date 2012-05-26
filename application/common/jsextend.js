/**
 * Function Extend based on Prototype
 * @author ijse
 */
exports.extend = function(sub, superclass) {
	var F = function() {};
	F.prototype = superclass.prototype;
	sub.prototype = new F();
	sub.prototype.constructor = sub;
	sub.superclass = superclass.prototype;
	superclass.prototype.constructor = superclass;
	return sub;
}
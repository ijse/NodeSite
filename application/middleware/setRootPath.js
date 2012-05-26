/**
 * Set root path
 */
exports.index = function(req, res, next) {
	res.local("BASE_URL", BASE_URL);
	next();
}

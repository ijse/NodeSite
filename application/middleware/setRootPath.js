/**
 * Set root path
 */
exports.index = function(req, res, next) {
	res.local("BASE_URL", CONFIG.baseUrl);
	next();
}
 
/**
 * Set root path
 */
exports.index = function(req, res, next) {

	res.locals({
		"BASE_URL": CONFIG.baseUrl,
		"SITE_NAME": CONFIG.siteName,
		"session": req.session
	})
	next();
}
 
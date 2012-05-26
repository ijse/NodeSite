/**
 * Handle page 404
 */
exports.index = function(req, res, next) {
	//check if file exist in PUBLIC_DIR
	var filePath = req.path;
	if(!path.existsSync(PUBLIC_DIR + filePath)) {
		res.render("404", {
			status: 404,
			message: "File Not Found!"
		});
	} else {
		next();
	}
}

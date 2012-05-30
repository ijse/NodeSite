/**
 * Handle page 404
 */
exports.index = function(req, res, next) {
	//check if file exist in PUBLIC_DIR
	var filePath = req.path;
	if(!path.existsSync(PUBLIC_DIR + filePath)) {
		/*
		res.render("404", {
			status: 404,
			message: "File Not Found!"
		}); */
		res.render("msg", {
			title: "404 该页没找到",
			message: {
				title: "404该页没找到！",
				content: "您访问的页面<em>" + req.url + "</em>没有找到!",
				url: req.headers.referer
			}
		})
	} else {
		next();
	}
}

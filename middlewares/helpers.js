
var config = require("../config.js");

module.exports = {
	"dynamicHelpers": {
		session: function(req, res) {
			return req.session;
		}
	},
	"staticHelpers": {
		VIEW_DIR: config.Dirs.viewDir + "/",
		BASE_URL: config.BaseUrl,
		SITE_NAME: config.AppName
	}
}
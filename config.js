/**
 * App configuration
 */

module.exports = {
	Debug: true, 

	AppName: "MyApp",
	BaseUrl: "/",

	SessionSecret: "My Session Secret",

	DataBase: {
		url: ""
	},

	Views: {
		engine: "ejs",
		page404: "",
		page500: ""
	},
	Dirs: {
		controllers: __dirname + "/controllers",
		middlewares: __dirname + "/middlewares",
		models: __dirname + "/model",
		routes: __dirname + "/routes",
		viewDir: __dirname + '/views',
		staticDir: __dirname + '/public',
		utils: __dirname + "/utils",
		logs: __dirname + "/logs"
	}
}
/**
 * 
 */
var thiz = {
	/**
	 * Show site-add page
	 * @param {[type]} req [description]
	 * @param {[type]} res [description]
	 */
	addView: function(req, res) {
		res.local("message", req.param("message")||"");
		// Get all records from database
		var site = model.getModel("SiteModel");
		site.list({
			limit: 20,
			skip:0,
			sort: "addDate"
		}, function(err, allSites) {
			res.local("allSites", allSites);
			res.render("siteAdd", {
				//layout:false
			});
		});
	},
	listView: function(req, res) {},
	/**
	 * Do add site item
	 */
	add: function(req, res) {
		var data = req.body.site;
		data.addDate = new Date();

		console.log("I've got data: ", data);

		var site = model.getModel("SiteModel", data);
		site.insert(function(err, item) {
			res.local("site", item[0]);
			thiz.addView(req, res);
		})
	},
	del: function(req, res) {
		console.log("Site delete controller!!")
		debugger;
		var site = model.getModel("SiteModel", {_id: req.param("_id")});
		site.remove(function(err, doc) {
			//res.local("message", "删除成功 ！");
			//thiz.addView(req, res);
			res.redirect("/site?message=" + "删除成功！");
		});
	}
}

util.extend(exports, thiz)
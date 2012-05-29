/**
 * Middle wares definination
 */
// Runs before routes
exports.before = confn([
	"statistics",
	"auth",
	"setGlobalVar"
])

// Runs after routes
exports.after = confn([
	"msg",
	"page404"
]);
function confn(list) {
	var arr = [];
	util.each(list, function(item, index) {
		arr.push(require("./" + item + ".js").index);
	})
	return arr;
} 
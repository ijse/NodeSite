/**
 * Middle wares definination
 */
// Runs before routes
exports.before = confn([
	"statistics",
	"setRootPath"
])

// Runs after routes
exports.after = confn([
	"page404"
]);
function confn(list) {
	var arr = [];
	util.each(list, function(item, index) {
		arr.push(require("./" + item + ".js").index);
	})
	return arr;
} 
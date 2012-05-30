/**
 * Dinner comment model
 */

var controller = function(initData) {
	controller.superclass.constructor.apply(this, [initData, "dinnerComment"]);
	var self = this;

	self.setData = function(data) {
		self.data = util.extend({
			postTime: now,
			vote: 0,
			dinnerDate: getDinnerDate(new Date())
		}, data);
	}
}


exports.class = controller;

/**
 * Get comment dinner date devided by 18:20
 */
function getDinnerDate(time) {
	var now = new time;	
	var today = new Date(now.getFullYear() + "-" 
							+ now.getMonth() + "-" 
							+ now.getDay() + " 00:00:00");
	var yesterday = new Date(today - (24*60*60) * 1000);
	var dinnerDate = (now - today < ((18*60*60 + 20*60) * 1000)) ? yesterday : today;
	return dinnerDate;
}
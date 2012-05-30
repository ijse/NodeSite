/**
 * Base Model for all Models
 * @author ijse
 * 
 */

var BaseModel = exports.class = function(initData, collectionName) {
	//this.data = initData || {};
	this.setData(initData);
	this.collection = DB.collection(collectionName); 
}

BaseModel.prototype.setData = function(data) {
	// util.each(util.keys(data), function(item, index) {
	// 	this[item] = data[item];
	// }
	this.data = data || {};
}

BaseModel.prototype.getData = function(key) {
	if(util.isUndefined(key)) {
		return this.data;
	} else {
		return this.data[key];
	}
}

BaseModel.prototype.insert = function() {
	console.info("Insert", this.data);
	var callback;
	var opt = arguments[0];
	if(util.isFunction(opt)) {
		callback = opt;
		opt = {};
	} else {
		callback = arguments[1];
	}
	this.collection.insert(this.data, opt, callback);
}
BaseModel.prototype.update = function(callback) {

}
/**
 * Remove items
 * @param { Object } options indicate advanced options. For example use {safe: true} when using callbacks
 * @param { Object } callback callback function that gets two parameters - an error object (if an error occured) and the count of removed records
 */	
BaseModel.prototype.remove = function(options, callback) {
	if(typeof this.data._id !== "undefined") {
		this.data._id = util.ObjectId(this.data._id);
		// this.data._id = new ObjectId(this.data._id);
		// this.data._id = {
		// 	"$oid" : this.data._id
		// }
		// this.data._id = "ObjectId('" + this.data._id + "')";
	}
	return this.collection.remove.call(this.collection, 
									this.data,
									options, callback);
}

/**
 * Various argument possibilities
 * 1 callback
 * 2 selector, callback,
 * 2 callback, options  // really?!
 * 3 selector, fields, callback
 * 3 selector, options, callback
 * 4 selector, fields, options, callback
 * 5 selector, fields, skip, limit, callback
 * 6 selector, fields, skip, limit, timeout, callback
 *
 * Available options:
 * limit, sort, fields, skip, hint, explain, snapshot, timeout, tailable, batchSize
 */
BaseModel.prototype.find = function() {
	return this.collection.find.apply(this.collection, arguments);
}
BaseModel.prototype.findOne = function() {
	return this.collection.findOne.apply(this.collection, arguments);
}

BaseModel.prototype.list = function(query, options, callback) {
	this.collection.find(query, options).toArray(function(err, doc) {
		callback.call(null, err, doc);
	});
	return null;
}
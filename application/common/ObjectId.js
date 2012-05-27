/**
 * Make objectId for mongodb
 */

module.exports.func = function(hex) {
	return DB.bson_serializer.ObjectID.createFromHexString(hex);
}
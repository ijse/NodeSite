/**
 * Utililities 
 * @author ijse
 */

var f = require("underscore");

f.extendfn = require("./jsextend.js").extend;
f.ObjectId = require("./ObjectId.js").func;

module.exports = f;
//f.extend(module.exports, f);
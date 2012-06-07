var log4js = require("log4js");
console.log(require("./log4js-config.json"));
log4js.configure("log4js-config.json");

var logger = log4js.getLogger();

logger.error("WRonG");
logger.debug("I'm debugging.. ");
logger.log("INFO", "hi!");


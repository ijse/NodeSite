/**
 * Initialize App and do some configuration
 * @author ijse
 * @date 2012-05-23
 */
var app = module.exports = express.createServer();
var middlewares = require(MIDWARE_DIR);

// Configuration
app.configure(function() {
  app.set('views', VIEW_DIR);
  app.set('view engine', 'ejs');
  app.register(".htm", require("ejs"));

  // Some middle wares
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({
    secret: CONFIG.sessionSecret
  }));

  //app.use(express.logger());

  // User-defined middle wares
  //app.use.apply(app, middlewares.before);
  util.each(middlewares.before, function(item, index) {
    app.use(item);
  });

  app.use(app.router);

  //app.use.apply(app, middlewares.after);
  util.each(middlewares.after, function(item, index) {
    app.use(item);
  });

  app.use(express.static(PUBLIC_DIR));
});

app.configure('development', function() {
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

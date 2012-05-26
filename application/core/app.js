/**
 * Initialize App and do some configuration
 * @author ijse
 * @date 2012-05-23
 */
var app = module.exports = express.createServer();
var middlewares = require("../middleware/index.js");
// Configuration
app.configure(function() {
  app.set('views', VIEW_DIR);
  app.set('view engine', 'ejs');

  // Some middle wares
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({
    secret: 'My Secret string for session'
  }));

  // User-defined middle wares
  app.use.apply(app, middlewares.before);

  app.use(app.router);

  app.use.apply(app, middlewares.after);

  app.use(express.static(PUBLIC_DIR));
});

app.register(".html", require("ejs"));

app.configure('development', function() {
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

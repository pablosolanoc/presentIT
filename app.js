var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var logger2 = require('./logger').child({ from: 'ExampleOfUsingWinston' }); // You should reference the logger folder at the root of the repository depending on the level

//SHould add "debug"
//SHould add "method-override"

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.resolve(__dirname, `./client/build`)));
app.set('view engine', 'jade');

// Loggers base if we are in a production enviroment or not
if (app.get("env") === "production") {
  if (process.env.SECURE_COOKIES === "yes") {
    app.set('trust proxy', 1);
    sessionConfig.cookie.secure = true; // serve secure cookies
  }
  //Use morgan, skip if status code is lesser than 400
  var rfs = require("rotating-file-stream");
  var errorLogStream = rfs.createStream("http-errors.log", {
    interval: "1d", // rotate daily
    path: path.join(__dirname, "logs/http-morgan"),
    maxFiles: 9,
  });
  app.use(
    logger("combined", {
      stream: errorLogStream,
      skip: function (req, res) {
        return res.statusCode < 400;
      },
    })
  ); // Solo escribe errores en la carpeta "/logs"
} else {
  app.use(logger("dev"));
}


app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); //This is like using body-parser
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

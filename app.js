var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gloveRouter = require('./routes/glove');
var boRouter = require('./routes/board');
var seRouter = require('./routes/selector');
var glove = require("./models/glove");
var resourceRouter = require('./routes/resource');

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});

// We can seed the collection if needed onserver start
async function recreateDB() {
  // Delete everything
  await glove.deleteMany();
  let instance1 = new glove({ gun_name: "AK", gun_manufacturer: 007, gun_weight: 200 });
  let instance2 = new glove({ gun_name: "UMP", gun_manufacturer: 00, gun_weight: 300 });
  let instance3 = new glove({ gun_name: "kalashinikavo", gun_manufacturer: 01, gun_weight: 500 });

  instance1.save().then(() => {

    console.log("Object 1 created")

  }).catch((err) => {

    console.log(err);

  })
  instance2.save().then(() => {

    console.log("Object 2 created")

  }).catch((err) => {

    console.log(err);

  })
  instance3.save().then(() => {

    console.log("Object 3 created")

  }).catch((err) => {

    console.log(err);

  })
}
let reseed = true;
if (reseed) { recreateDB(); }



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/glove', gloveRouter);
app.use('/board', boRouter);
app.use('/selector', seRouter);
app.use('/resource', resourceRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

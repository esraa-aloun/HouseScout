var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

const port = process.env.PORT;


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const authRoute = require('./routes/auth');
const propertyRoute = require('./routes/property')


var app = express();

// Look for all the static files in public folder (css, JS, Images, Audio, Videos).
app.use(express.static("public"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/', authRoute);
app.use('/', propertyRoute);



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


mongoose.set('strictQuery', false);
// MongoDB Connection
mongoose.connect(process.env.mongoDBURL)
    // {useNewUrlParser: true, useUnifiedTopology: true},
    // () => {
    //     console.log("MongoDB Connected Successfully")
    // }

//)
.then(() => {
  console.log('Connected to database');
})
.catch((error) => {
  console.error('Error connecting to database:', error);
});

// Listen to specific port for incomming requests
app.listen(port, () => {
    console.log(`HouseScout app is running on ${port}`);
})

module.exports = app;

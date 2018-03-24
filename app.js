var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var env = require('dotenv').load();
var app = express();

var index = require('./routes/index');
var users = require('./routes/users');
var mahasiswa = require('./routes/mahasiswa');
var dosen = require('./routes/dosen');
var prodi = require('./routes/prodi');
var jurusan = require('./routes/jurusan');
var jalurmasuk = require('./routes/jalurmasuk');
var matakuliah = require('./routes/matakuliah');
var nilai = require('./routes/nilai');
//var auth = require('./routes/auth');



// Register hbs Partials
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/layouts');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize()); 
app.use(passport.session()); // persistent login sessions


app.use('/', index);
app.use('/users', users);
app.use('/mahasiswa', mahasiswa);
app.use('/dosen', dosen);
app.use('/prodi', prodi);
app.use('/jurusan', jurusan);
app.use('/jalurmasuk', jalurmasuk);
app.use('/matakuliah', matakuliah);
app.use('/nilai', nilai);
//app.use('/', auth);

var models = require("./models");
require('./config/passport/passport.js')(passport, models.user);

var authRoute = require('./routes/auth')(app, passport);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
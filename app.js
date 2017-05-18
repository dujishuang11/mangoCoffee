var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var lhqnews = require('./routes/lhqnews')
var lhqresume = require('./routes/lhqresume')
var tixian = require('./routes/zTxianH');
var djsList = require('./routes/djsList');
var personal = require('./routes/personal_shop');//商品列表

var team=require('./routes/team');//团队入驻
var enterprise=require('./routes/enterprise');//企业入驻
var wyh=require('./routes/wyh');//练习

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit : "1000kb"}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/lhqnews',lhqnews);
app.use('/resume',lhqresume);
app.use('/tixian',tixian);
//app.use('/qianbao',qianbao);
app.use('/djsList', djsList);
app.use('/personal',personal);
app.use('/tenter',team);//团队入驻
app.use('/qenter',enterprise);//企业入驻
app.use('/wyh',wyh);//练习

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
  app.listen('1998',function(){
//	   console.log('server start .......')
  }) 

module.exports = app;

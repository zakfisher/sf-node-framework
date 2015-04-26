var express = require('express');
var stormpath = require('express-stormpath');
var path = require('path');
var logger = require('morgan');
var assert = require('assert');
var env = require('node-env-file');

env('.env');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(stormpath.init(app, {
  apiKeyId: process.env.STORMPATH_API_KEY_ID,
  apiKeySecret: process.env.STORMPATH_API_KEY_SECRET,
  application: process.env.STORMPATH_APP_HREF,
  secretKey: process.env.EXPRESS_SECRET,
  enableGoogle: true,
  social: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
}));

app.use('/', require('./routes/index'));

app.listen(3000);
console.log('App is listening at localhost:3000');
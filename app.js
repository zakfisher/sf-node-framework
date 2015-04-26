var express = require('express');
var stormpath = require('express-stormpath');
var assert = require('assert');
var env = require('node-env-file');
env('.env');

var app = express();
app.use(stormpath.init(app, {
  apiKeyId: process.env.STORMPATH_API_KEY_ID,
  apiKeySecret: process.env.STORMPATH_API_KEY_SECRET,
  application: process.env.STORMPATH_APP_HREF,
  secretKey: process.env.EXPRESS_SECRET,
}));

app.listen(3000);
console.log('App is listening at localhost:3000');
var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');

router.get('/', function(req, res) {
  res.json({home: true});
});

router.get('/google', stormpath.loginRequired, function(req, res) {
  res.json({yee: true});
});

router.get('/secret', stormpath.loginRequired, function(req, res) {
  res.send("If you're seeing this page, you must be logged in!");
});

module.exports = router;
var express = require('express');
var router = express.Router();
const path = require('path');
var debug = require('debug')('PRESENTIT:index');
var {google} = require('googleapis');
var async = require('async');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   // debug(req.app);
//   // var io = req.app.get('socketio');
//   // io.emit('hi!');
//   // debug('Emitted');
//   res.sendFile(path.join(__dirname, '../views/new.html'));
// });

/* This is what get the ReactApp*/
router.get('/app', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

/* This is what get the ReactApp*/
router.get('/app/*', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;

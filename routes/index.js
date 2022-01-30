var express = require('express');
var router = express.Router();
const path = require('path');
var debug = require('debug')('PRESENTIT:index');
var {google} = require('googleapis');
var async = require('async');


/* GET home page. */

/* This is what gets the ReactApp*/
router.get('/app', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

/* This is what get the ReactApp*/
router.get('/app/*', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;

var express = require('express');
var router = express.Router();
const path = require('path');
var debug = require('debug')('PRESENTIT:index')

/* GET home page. */
router.get('/', function(req, res, next) {
  // debug(req.app);
  // var io = req.app.get('socketio');
  // io.emit('hi!');
  // debug('Emitted');
  res.sendFile(path.join(__dirname, '../views/new.html'));
});

module.exports = router;

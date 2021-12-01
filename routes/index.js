var express = require('express');
var router = express.Router();
const path = require('path');
var debug = require('debug')('PRESENTIT:index');
var {google} = require('googleapis');
var async = require('async');


/* GET home page. */
router.get('/', function(req, res, next) {
  // debug(req.app);
  // var io = req.app.get('socketio');
  // io.emit('hi!');
  // debug('Emitted');
  res.sendFile(path.join(__dirname, '../views/new.html'));
});

router.post("/backend", async function(req, res){
  try{
    const {refreshToken, accessToken} = req.body;
    debug({refreshToken, accessToken});

    const oauth2Client = new google.auth.OAuth2(
      '600980939856-9n3c8nuuci0h3alemhr77eit6lpsktc6.apps.googleusercontent.com',
      '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'
    );

    oauth2Client.setCredentials({
      access_token: 'ya29.a0ARrdaM-WmYlf77N0jahjggW0Zepl7N_J4QBSPOWMMG28HgM_Ah2ytckLPxi3G8iNbLcQ_SimLceecGXhue8pSPabpVSblu3DkPQYhOdFgHM16Ruvfene20BlYjH02ngzfkStAr4cjzVLzqY3itO7NdIqHkm3PQ'
    });

    // const {tokens} = await oauth2Client.getToken(code)
    // debug({tokens});


    const drive = google.drive({
      version: 'v3',
      auth: oauth2Client
    });

    // debug(drive);
    
    async.doWhilst(function (callback) {
      drive.files.list({
        q: "mimeType='image/jpeg'",
        fields: 'nextPageToken, files(id, name)',
        spaces: 'drive',
        pageToken: null
      }, function (err, res) {
        if (err) {
          // Handle error
          console.log('111111111');
          console.error(err);
          callback(err)
        } else {
          console.log('2222222222222');
          debug(res);
          res.data.files.forEach(function (file) {
            console.log('Found file: ', file.name, file.id);
          });
          pageToken = res.nextPageToken;
          callback();
        }
      });
    }, function () {
      console.log('33333333333');
      return !!pageToken;
    }, function (err) {
      if (err) {
        console.log('44444444');
        // Handle error
        console.error(err);
      } else {
        console.log('555555555555');
        // All pages fetched
      }
    })
    

    res
    .status(200)
    .json({ message: "Wasnt able to add catequista" });
  }catch(error){
    debug(error);
  }
})

module.exports = router;

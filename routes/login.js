var express = require('express');
var router = express.Router();
var debug = require('debug')('PRESENTIT:login');
var {google} = require('googleapis');
var firebase = require('firebase-admin');


router.get('/', function(req, res){
    const oauth2Client = new google.auth.OAuth2(
        process.env.oAuth_Client_Id,
        process.env.oAuth_Client_Secret,
        process.env.oAuth_Redirect
    );

    let scopes = [
        "https://www.googleapis.com/auth/drive.readonly",
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ];

    //Geting redirect link so user can Sign In with Google
    const googleLoginLink = oauth2Client.generateAuthUrl({
        //Needs access_type: 'offline' to get refreshToken
        access_type: 'offline',
        //Needs prompt: 'consent' so it will get a refreshToken everytime a user Signs In not only the first time
        prompt: 'consent',
        //Needs prompt: 'scope' to know what APIs it will be able to access from GoogleAPIs
        scope: scopes
    });
    //Redirect to the Google Auth Page
    res.redirect(googleLoginLink);

});



router.get('/redirect', function(req, res){
    //Get a new authCLient
    const oauth2Client = new google.auth.OAuth2(
        process.env.oAuth_Client_Id, 
        process.env.oAuth_Client_Secret,
        process.env.oAuth_Redirect
    );

    //Get the firestore client
    const db = firebase.firestore();
    
    //If the redirect resulted in an error
    if(req.query.error){
        return res.redirect('/');
    }else{
        //Get access and refresh token
        oauth2Client.getToken(req.query.code, function(err, token){
            if(err){
                return res.redirect('/');
            }
            //We set the access token as the client credentials
            oauth2Client.setCredentials({access_token: `${token.access_token}`});
            //We get the API client to get user ifno
            var oauth2 = google.oauth2({
                auth: oauth2Client,
                version: 'v2'
            });
            //We get the user info
            oauth2.userinfo.get(
              async function(err, response) {
                  if(err) {
                     debug(err);
                  }else {
                      const { id, given_name, family_name, picture, locale } = response.data;
                      debug(response.data);
                      //Given the user info we search firestore to see if the user exists
                     const dbUsers = db.collection('users');
                     const specificUser = await dbUsers.doc(`${id}`).get();
                     //Add the tokens to the user session
                     req.session.user = {
                        refresh_token: token.refresh_token,
                        access_token: token.access_token,
                        info: {
                            given_name, family_name, picture, locale
                        }
                     };
                     debug(req.session)
                     //If user exists do nothing, if it doesnt create one in database
                     if (!specificUser.exists) {
                        debug('No document');
                        const newUser = dbUsers.doc(`${id}`); 
                        await newUser.set({
                            given_name,
                            family_name,
                            picture,
                            locale
                           });
                     }else {
                        debug('User already exists');
                     }
                  }
                  res.redirect(`${process.env.FRONT_END_ROUTE}`);
              });
        })
    }
    
});
  

router.get('/info', function(req, res){
    // debug('Session: \n\n');
    // debug(req.session);
    try{
        debug('hello\n\n');
        const {info} = req.session.user;
        // debug(info);
        res.send({info, csrfToken: req.csrfToken()});
        debug('hello 22\n\n');
    }catch(error){
        debug(error);
        res.status(204);
        res.send('204: No user info');
    } 
});

router.get('/jaja', function(req, res){
    res.send('HOla men como estas');
});

router.get('/logout', function(req, res){
    req.session.destroy();
    res.redirect(`${process.env.FRONT_END_ROUTE}`);
});

module.exports = router;



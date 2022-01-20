var debug = require('debug')('PRESENTIT:getAllFiles');
var {google} = require('googleapis');
var  apiCalls = require('./apiCalls');

var getAccessToken = require('../tokens/tokenRefresh');

const getAllFiles = async (req, res, times) => {

    const accessToken = req.session.user.access_token;
    const refreshToken = req.session.user.refresh_token;

    const {displayConfig} = req.query;

    const oauth2Client = new google.auth.OAuth2(
        process.env.oAuth_Client_Id,
        process.env.oAuth_Client_Secret,
        process.env.oAuth_Redirect
    );
    
    oauth2Client.setCredentials({
        access_token: accessToken
    });

    const drive = google.drive({
        version: 'v3',
        auth: oauth2Client
    });

    const files = await apiCalls.allFilesCall(drive, displayConfig);
    // debug(files);
    if(files){
        return res.send({files})
    }else if(times === 1){
        //Maybe wasnt able to get the files and folders cause 
        // the access token doesnt work anymore, get new one with refreshToken and try again
        const wasRequestSuccesful = await getAccessToken(req, refreshToken);
        debug(wasRequestSuccesful);
        if(wasRequestSuccesful){
            return getAllFiles(req, res, 2);
        }else{
            return res.status(400).send('We were not able to get files')
        }
    }else{
        return res.status(400).send('We were not able to get files');
    }


}


module.exports = getAllFiles;
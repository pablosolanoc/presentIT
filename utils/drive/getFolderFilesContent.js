var debug = require('debug')('PRESENTIT:getFolderFilesContent');
var {google} = require('googleapis');
var  apiCalls = require('./apiCalls');

var getAccessToken = require('../tokens/tokenRefresh');

const getFolderFilesContent = async (req, res, times) => {
    const accessToken = req.session.user.access_token;
    const refreshToken = req.session.user.refresh_token;
    // debug(req.headers);
    const {folderid} = req.headers;
    const {displayConfig} = req.query;

    debug(`\n\n${folderid}\n\n`);
    debug(req.query);

    const oauth2Client = new google.auth.OAuth2(
        process.env.oAuth_Client_Id,
        process.env.oAuth_Client_Secret,
        process.env.oAuth_Redirect
    );

    oauth2Client.setCredentials({
        // access_token: accessToken,
        access_token: accessToken
    });

    const drive = google.drive({
        version: 'v3',
        auth: oauth2Client
    });

    let folders = null;
    let files = null; 
    if(folderid === 'root'){
        folders =  await apiCalls.foldersCallRoot(drive, folderid);
        // debug(folders);
        files = await apiCalls.filesCallRoot(drive, folderid);
    }else{
        folders =  await apiCalls.foldersCall(drive, folderid, displayConfig);
        // debug(folders);
        files =  await apiCalls.filesCall(drive, folderid, displayConfig);
    }

    if(folders && files){
        return res.send({folders, files})
    }else if(times === 1){
        //Maybe wasnt able to get the files and folders cause 
        // the access token doesnt work anymore, get new one with refreshToken and try again
        const wasRequestSuccesful = await getAccessToken(req, refreshToken);
        debug(wasRequestSuccesful);
        if(wasRequestSuccesful){
            return getFolderFilesContent(req, res, 2);
        }else{
            return res.status(400).send('There was no folder "named" like that')
        }
    }else{
        return res.status(400).send('There was no folder "named" like that');
    }
    
}

module.exports = getFolderFilesContent;



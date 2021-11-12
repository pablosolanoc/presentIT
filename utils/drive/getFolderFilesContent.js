var debug = require('debug')('PRESENTIT:getFolderFilesContent');
var {google} = require('googleapis');
var  apiCalls = require('./apiCalls');

const getFolderFilesContent = async (req, res) => {
    // const accessToken = req.session.user.access_token;
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
        access_token: 'ya29.a0ARrdaM-LoarfIrpSR7P6KyeQtikNlieOcTvmXW6iYyQms3jzeBjfieAsN6_QDfkPio_3YD0MdxadC5y6MzXSJKx-CF2Y2rqYjjKSnnwRMpBHuy4QCBJrcjPpo5f4LlGFeBn7HN4-uGRBpH1md_C1zoTGj-I4Tg'
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
        files =  await apiCalls.filesCallRoot(drive, folderid);
    }else{
        folders =  await apiCalls.foldersCall(drive, folderid, displayConfig);
        // debug(folders);
        files =  await apiCalls.filesCall(drive, folderid, displayConfig);
    }

    if(folders) return res.send({folders, files});
    return res.status(400).send('There was no folder "named" like that')
}

module.exports = getFolderFilesContent;



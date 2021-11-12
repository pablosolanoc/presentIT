var express = require('express');
var router = express.Router();
var debug = require('debug')('PRESENTIT:login');
var getFolderFilesContent = require('../utils/drive/getFolderFilesContent');
var {google} = require('googleapis');
var fs = require('fs');

router.get('/structure/', function(req, res){
    try{
        getFolderFilesContent(req, res);
    }catch(error){
        debug(error);
    }
});

router.get('/pdf/', async function(req, res){
    try{
        // // const accessToken = req.session.user.access_token;
        // // const {folderid} = req.headers;
        // // const {displayConfig} = req.query;

        // debug(`\n\n${folderid}\n\n`);
        // debug(req.query);

        const oauth2Client = new google.auth.OAuth2(
            process.env.oAuth_Client_Id,
            process.env.oAuth_Client_Secret,
            process.env.oAuth_Redirect
        );

        oauth2Client.setCredentials({
            access_token: 'ya29.a0ARrdaM_AMGOt09dMJq5GyLrZRoR6168jhraMU0atpiKbG9gY9AuuxUpYPfp-fh9FMxLs8Oc6c8zfs3jE4hpt-dbE1wUtMhJhd3-IWLehZvV2gtdCMEWqUsg90lCEIYAVdbUalC_5KCWyswKROyUbQhUyGgP_zA',
        });

        const drive =  google.drive({
            version: 'v3',
            auth: oauth2Client
        });

        // const response = await drive.files.list({
        //     q: `mimeType='application/vnd.google-apps.presentation' and parents in '${folderid}' or mimeType='application/pdf' and parents in '${folderid}' ${aditionalQuery}`,
        //     fields: 'nextPageToken, files(id, name, shared, fileExtension, viewedByMeTime, sharedWithMeTime)',
        // });
        
        // const request = await drive.files.get({
        //     'fileId': '1aEpqrZ1uT3CKjm0MoF8TNh3at-BNoZMg',
        //     // 'fileId': '14JCCfU6bMahb8uMfJEj7ZeHAkyzOi8PBaZa7NCdvrzs',
        //     alt: 'media',
            
        // }, 
        // { responseType: 'arraybuffer' }
        // );

        const request = await drive.files.export({
            fileId: '14JCCfU6bMahb8uMfJEj7ZeHAkyzOi8PBaZa7NCdvrzs',
            mimeType: 'application/pdf',
        },
            { responseType: 'arraybuffer' }
        )

        // fs.writeFileSync('helloworld.pdf', Buffer.from(request.data),  function (err) {
        //     if (err){
        //         console.log(err)
        //     }else{
        //         console.log('Hello World > helloworld.txt');
        //     }
        // });

        // res.writeHead(200, {
        //     'Content-Type': mimetype,
        //     'Content-disposition': 'attachment;filename=' + filename,
        //     'Content-Length': data.length
        // });
        debug(request.data);
        res.end(Buffer.from(request.data));

        // request.data = 'hola';
        // debug(request);
        // res.send(request.data);


        // debug(request);
        // res.writeHead(200, {
        //     'Content-Type': 'application/pdf',
        //     'Content-disposition': 'attachment;filename=' + 'hola.pdf',
        //     'Content-Length': request.data.length
        // });
        // debug(Object.keys(request.data));

        // debug(response);

        // res.send(Buffer.from(request.data));

        // request.execute(function(resp) {
        //     console.log('Title: ' + resp.title);
        //     console.log('Description: ' + resp.description);
        //     console.log('MIME type: ' + resp.mimeType);

        // });
    }catch(error){
        debug(error);
    }
});


module.exports = router;
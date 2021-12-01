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
            access_token: 'ya29.a0ARrdaM98GjRmhtuwA6-_-HfVImgETiRxwHCqSlwdsxv0V9ialoUYtLc-nM95Ze3pbyLNPeLcv0x2zGX5BiEdKmZqizaBUcYE42i60IeQWw_XBEtjoWjC6TqaZTJ4aPRaOyWQ9ZNMczeS10KkYms1hioUEyF4tg',
        });

        const drive =  google.drive({
            version: 'v3',
            auth: oauth2Client
        });

        // const response = await drive.files.list({
        //     q: `mimeType='application/vnd.google-apps.presentation' and parents in '${folderid}' or mimeType='application/pdf' and parents in '${folderid}' ${aditionalQuery}`,
        //     fields: 'nextPageToken, files(id, name, shared, fileExtension, viewedByMeTime, sharedWithMeTime)',
        // });
        
        // This lines download a pdf 
        // const request = await drive.files.get({
        //     'fileId': '17GXXJkPUbLwMMR6Uwdzn6O84c6SR2JIX4c-qgTPoTI8',
        //     // 'fileId': '17hnRIF0BHS5SnY5EgeOQCD36HT-4XvY2',
        //     alt: 'media',
            
        // }, 
        // { responseType: 'arraybuffer' }
        // );

        // This lines download a google doc file
        const request = await drive.files.export({
            fileId: '1RRjrbf28G1XZr1CUHBdGy7hhaydOopT8Huki5NXn2Yk',
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
var debug = require('debug')('PRESENTIT:fileDownload');
var getAccessToken = require('../tokens/tokenRefresh');
var {google} = require('googleapis');

const getFile = async (req, res, time) => {

    const refreshToken = req.session.user.refresh_token;
    

    const bufferFile = await getPDFFile(req, res);
    if(bufferFile){
        debug('\n\n1\n\n')
        return res.end(bufferFile);
    }else if(time === 1){
        debug('\n\n2\n\n')
        const wasRequestSuccesful = await getAccessToken(req, refreshToken);
        debug(wasRequestSuccesful);
        if(wasRequestSuccesful){
            return getFile(req, res, 2);
        }else{
            return res.status(400).send('There was an error while getting the file')
        }
    }else{
        debug('\n\n3\n\n')
        return res.status(400).send('There was an error while getting the file')
    }

}

const getPDFFile = async (req, res) => {
    try{
        const accessToken = req.session.user.access_token;
        // // const {folderid} = req.headers;
        const {displayConfig, fileId, pdfFile} = req.query;
        debug({displayConfig, fileId, pdfFile})
        // debug(`\n\n${folderid}\n\n`);
        // debug(req.query);
        if(fileId === ''){
            return res.status(400).send('There was an error while getting the file')
        }

        const oauth2Client = new google.auth.OAuth2(
            process.env.oAuth_Client_Id,
            process.env.oAuth_Client_Secret,
            process.env.oAuth_Redirect
        );

        oauth2Client.setCredentials({
            access_token: accessToken,
        });

        const drive =  google.drive({
            version: 'v3',
            auth: oauth2Client
        });

        // const response = await drive.files.list({
        //     q: `mimeType='application/vnd.google-apps.presentation' and parents in '${folderid}' or mimeType='application/pdf' and parents in '${folderid}' ${aditionalQuery}`,
        //     fields: 'nextPageToken, files(id, name, shared, fileExtension, viewedByMeTime, sharedWithMeTime)',
        // });
        
        let request = null;
        if(pdfFile === '1'){
            debug('hola')
            // This lines download a pdf 
            request = await drive.files.get({
                    'fileId': fileId,
                    // 'fileId': '17hnRIF0BHS5SnY5EgeOQCD36HT-4XvY2',
                    alt: 'media',
                }, 
                { responseType: 'arraybuffer' }
            );
        }else{
            debug('hola2')
            // This lines download a google doc file
            request = await drive.files.export({
                // fileId: '1RRjrbf28G1XZr1CUHBdGy7hhaydOopT8Huki5NXn2Yk',
                    fileId: fileId,
                    mimeType: 'application/pdf'
                },
                { responseType: 'arraybuffer' }
            )
        }
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
        return Buffer.from(request.data)
        
        // res.end();

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
        return false;
    }
}



module.exports = getFile;
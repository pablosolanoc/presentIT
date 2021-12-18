var express = require('express');
var router = express.Router();
var debug = require('debug')('PRESENTIT:login');
var getFolderFilesContent = require('../utils/drive/getFolderFilesContent');
var {google} = require('googleapis');
var fs = require('fs');
var middleware = require('../utils/middleware');
var fileDownload = require('../utils/fileDownload');


router.get('/structure/', middleware.checkCredentials, function(req, res){
    debug(req.session)
    try{
        getFolderFilesContent(req, res, 1);
    }catch(error){
        debug(error);
    }
});

router.get('/pdf/', middleware.checkCredentials, function(req, res){
    try{
        fileDownload(req, res, 1);
    }catch(error){
        debug(error);
    }
});


module.exports = router;
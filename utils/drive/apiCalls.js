
var debug = require('debug')('PRESENTIT:apiCalls');

const getSize = (obj) => {
    let size = 0;

    for(key in obj){
        if(obj.hasOwnProperty(key)) size++;
    }
    return size;
}


const foldersCallRoot = async (drive, folderid) => {
    try{
        const ownFolders = {};
        const sharedFolders = {};
        let aditionalQuery = `or mimeType='application/vnd.google-apps.folder' and sharedWithMe=true`;
        const response = await drive.files.list({
            q: `mimeType='application/vnd.google-apps.folder' and parents in '${folderid}' ${aditionalQuery}`,
            fields: 'nextPageToken, files(id, name, shared, owners, sharedWithMeTime)',
        });
        const finishedProcess = await Promise.all(response.data.files.map(async function (folder) {
            // debug('Found folder 222: ', folder.name, folder.id, folder.shared, folder.owners, folder.sharedWithMeTime);
            // debug('Found folder: folder.owners);
            const folderInfo = {};
            folderInfo['name'] = `${folder.name}`;
            const files = await filesCall(drive, folder.id);
            folderInfo['filesInside'] = files.filesInside;
            folderInfo['sharedWithMeTime'] = folder.sharedWithMeTime;
            if(!folder.shared){
                folderInfo['shared'] = false;
            }else{
                folderInfo['shared'] = true;
            }
            if(!folder.sharedWithMeTime){
                folderInfo['mine'] = true;
                ownFolders[`${folder.id}`] = folderInfo;
            }else{
                folderInfo['mine'] = false;
                sharedFolders[`${folder.id}`] = folderInfo;
            }
            // return 0;
        }));
        // console.log(`${finishedProcess} hkjasjkdajkskj`);
        const sendResponse = {ownFolders, sharedFolders};
        // debug(sendResponse);
        return sendResponse;
    }catch(error){
        debug(error);
        return false;
    }
}


const filesCallRoot = async (drive, folderid) => {
    try{
        const ownFiles = {};
        const sharedFiles = {};
        let aditionalQuery = `or mimeType='application/vnd.google-apps.presentation' and sharedWithMe=true or mimeType='application/pdf' and sharedWithMe=true`
        const response = await drive.files.list({
            q: `mimeType='application/vnd.google-apps.presentation' and parents in '${folderid}' or mimeType='application/pdf' and parents in '${folderid}' ${aditionalQuery}`,
            fields: 'nextPageToken, files(id, name, shared, fileExtension, viewedByMeTime, sharedWithMeTime)',
        });
        response.data.files.forEach(function (folder) {
            // debug('Found file 3333: ', folder.name, folder.id, folder.shared, folder.fileExtension);
            const folderInfo = {};
            folderInfo['name'] = `${folder.name}`;
            folderInfo['extension'] = `${folder.fileExtension}`;
            folderInfo['viewedByMeTime'] = `${folder.viewedByMeTime}`;
            if(!folder.shared){
                folderInfo['shared'] = false;
            }else{
                folderInfo['shared'] = true;
            }
            if(!folder.sharedWithMeTime){
                folderInfo['mine'] = true;
                ownFiles[`${folder.id}`] = folderInfo;
            }else{
                folderInfo['mine'] = false;
                sharedFiles[`${folder.id}`] = folderInfo;
            }
        });
        const sendResponse = {ownFiles, sharedFiles, filesInside: response.data.files.length};
        // debug(sendResponse);
        return sendResponse;
    }catch(error){
        debug(error);
        return false;
    }
}

const foldersCall = async (drive, folderid, displayConfig = '0') => {
    try{
        const ownFolders = {};
        const sharedFolders = {};
        const response = await drive.files.list({
            q: `mimeType='application/vnd.google-apps.folder' and parents in '${folderid}'`,
            fields: 'nextPageToken, files(id, name, shared, owners, sharedWithMeTime)',
        });
        const finishedProcess = await Promise.all(response.data.files.map(async function (folder) {
            // debug('Found folder 222: ', folder.name, folder.id, folder.shared, folder.owners, folder.sharedWithMeTime);
            // debug('Found folder: folder.owners);
            const folderInfo = {};
            folderInfo['name'] = `${folder.name}`;
            const files = await filesCall(drive, folder.id);
            folderInfo['filesInside'] = files.filesInside;
            folderInfo['sharedWithMeTime'] = folder.sharedWithMeTime;
            if(!folder.shared){
                folderInfo['shared'] = false;
            }else{
                folderInfo['shared'] = true;
            }
            if(displayConfig === '0'){
                folderInfo['mine'] = true;
                ownFolders[`${folder.id}`] = folderInfo;
            }else if(displayConfig === '1'){
                folderInfo['mine'] = false;
                sharedFolders[`${folder.id}`] = folderInfo;
            }
            // return 0;
        }));
        // console.log(`${finishedProcess} hkjasjkdajkskj`);
        const sendResponse = {ownFolders, sharedFolders};
        // debug(sendResponse);
        return sendResponse;
    }catch(error){
        debug(error);
        return false;
    }
}


const filesCall = async (drive, folderid, displayConfig = '0') => {
    try{
        const ownFiles = {};
        const sharedFiles = {};
        const response = await drive.files.list({
            q: `mimeType='application/vnd.google-apps.presentation' and parents in '${folderid}' or mimeType='application/pdf' and parents in '${folderid}'`,
            fields: 'nextPageToken, files(id, name, shared, fileExtension, viewedByMeTime, sharedWithMeTime)',
        });
        response.data.files.forEach(function (folder) {
            // debug('Found file 3333: ', folder.name, folder.id, folder.shared, folder.fileExtension);
            const folderInfo = {};
            folderInfo['name'] = `${folder.name}`;
            folderInfo['extension'] = `${folder.fileExtension}`;
            folderInfo['viewedByMeTime'] = `${folder.viewedByMeTime}`;
            
            if(!folder.shared){
                folderInfo['shared'] = false;
            }else{
                folderInfo['shared'] = true;
            }
            if(displayConfig === '0'){
                folderInfo['mine'] = true;
                ownFiles[`${folder.id}`] = folderInfo;
            }else if(displayConfig === '1'){
                folderInfo['mine'] = false;
                sharedFiles[`${folder.id}`] = folderInfo;
            }
        });
        const sendResponse = {ownFiles, sharedFiles, filesInside: response.data.files.length};
        // debug(sendResponse);
        return sendResponse;
    }catch(error){
        debug(error);
        return false;
    }
}

const allFilesCall = async (drive, displayConfig) => {
    try{
        const ownFiles = {};
        const sharedFiles = {};
        const response = await drive.files.list({
            q: `mimeType='application/vnd.google-apps.presentation' or mimeType='application/pdf'`,
            fields: 'nextPageToken, files(id, name, shared, fileExtension, viewedByMeTime, sharedWithMeTime)',
        });
        response.data.files.forEach(function (file) {
            const fileInfo = {};

            fileInfo['name'] = `${file.name}`;
            fileInfo['extension'] = `${file.fileExtension}`;
            fileInfo['viewedByMeTime'] = `${file.viewedByMeTime}`;
            
            if(!file.shared){
                fileInfo['shared'] = false;
            }else{
                fileInfo['shared'] = true;
            }
            if(!file.sharedWithMeTime){
                fileInfo['mine'] = true;
                ownFiles[`${file.id}`] = fileInfo;
            }else if(displayConfig === '1'){
                fileInfo['mine'] = false;
                sharedFiles[`${file.id}`] = fileInfo;
            }

        });
        const sendResponse = {ownFiles, sharedFiles, filesInside: response.data.files.length};
        return sendResponse;
    }catch(error){
        debug(error);
        return false;
    }
}

module.exports = {
    foldersCallRoot,
    filesCallRoot,
    foldersCall,
    filesCall,
    allFilesCall
}
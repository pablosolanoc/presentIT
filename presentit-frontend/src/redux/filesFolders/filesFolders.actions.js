import {getRequestAuthorized} from '../../services/api';


export const fetchFilesFoldersStart = () => ({
    type: 'FETCH_FILES_FOLDERS_START',
});

export const fetchFilesFoldersSuccess = (filesFolders) => ({
    type: 'FETCH_FILES_FOLDERS_SUCCESS',
    payload: filesFolders
});

export const fetchFilesFoldersAsync = (displayConfig ,overallLayout, currentFolderId, CSRFToken) => {
    return async (dispatch) => {
        let config = {
            params: {
                displayConfig: displayConfig,
                overallLayout: overallLayout
            },
            headers: {
                folderid: currentFolderId,
                'CSRF-Token': CSRFToken
            }
        }
        dispatch(fetchFilesFoldersStart());
        const allFilesFolders = await getRequestAuthorized('/drive/structure', config);
        if(allFilesFolders){
            const {folders, files} = allFilesFolders.data;
            // const folders = ;
            const {ownFiles, sharedFiles} = files;

            let ownFolders = {};
            let sharedFolders = {};
            if( overallLayout === 1 ){
                ownFolders = folders.ownFolders;
                sharedFolders = folders.sharedFolders;
            }

            const filesFolders = {ownFiles,sharedFiles, ownFolders, sharedFolders};

            console.log(filesFolders);
            dispatch(fetchFilesFoldersSuccess(filesFolders));
        }
    }
}
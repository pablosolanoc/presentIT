import { FilesFoldersActionsTypes } from './filesFolders.types';

const INITIAL_STATE = {
    myFiles: {},
    sharedFiles: {},
    myFolders: {},
    sharedFolders: {},
    isFetchingFilesFolders: false,
}

const filesFoldersReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case FilesFoldersActionsTypes.FETCH_FILES_FOLDERS_START:
            return{
                ...state,
                isFetchingFilesFolders: true
            }
        case FilesFoldersActionsTypes.FETCH_FILES_FOLDERS_SUCCESS:
            return{
                ...state,
                isFetchingFilesFolders: false,
                myFiles: action.payload.ownFiles,
                sharedFiles: action.payload.sharedFiles,
                myFolders: action.payload.ownFolders,
                sharedFolders: action.payload.sharedFolders
            }
        default:
            return state;
    }

}

export default filesFoldersReducer;
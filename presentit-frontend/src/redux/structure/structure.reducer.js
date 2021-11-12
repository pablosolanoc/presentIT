import { StructureActionTypes } from "./structure.types"

const INITIAL_STATE = {
    currentFolderId: 'root',
    path: ['/'],
    IDsPath: ['root']
}

const structureReducer = (state=INITIAL_STATE, action) => {
    // state=INITIAL_STATE
    switch(action.type){
        case StructureActionTypes.ADD_TO_PATH:
            return {
                ...state,
                path: [...state.path, action.payload]
            }
        case StructureActionTypes.SET_CURRENT_FOLDER_ID:
            return {
                ...state,
                currentFolderId: action.payload,
                IDsPath: [...state.IDsPath, action.payload]
            }
        case StructureActionTypes.REMOVE_FROM_PATH:
            return {
                ...state,
                currentFolderId: action.payload
            }
        case StructureActionTypes.SET_PATH_FROM:
            return {
                ...state,
                path: [...state.path.slice(0, action.payload+1)],
                IDsPath: [...state.IDsPath.slice(0, action.payload+1)],
                currentFolderId: state.IDsPath[action.payload]
            }
        default:
            return state;

    }
}

export default structureReducer;
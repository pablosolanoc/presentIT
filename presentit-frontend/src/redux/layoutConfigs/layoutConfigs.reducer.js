import { LayoutConfigsActionsTypes } from "./layoutConfigs.types";

const INITIAL_STATE = {
    folderLayoutConfig: 0,
    overallLayout: 1, // 0 means it shows just files, 1 means folders and files contained in that folder
}


const layoutConfigsReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case LayoutConfigsActionsTypes.SET_FOLDER_LAYOUT_TYPE:
            return{
                ...state,
                folderLayoutConfig: action.payload
            }
        case LayoutConfigsActionsTypes.SET_OVERALL_LAYOUT_TYPE:
            return{
                ...state,
                overallLayout: action.payload
            }
        default:
            return state;
    }

}

export default layoutConfigsReducer;
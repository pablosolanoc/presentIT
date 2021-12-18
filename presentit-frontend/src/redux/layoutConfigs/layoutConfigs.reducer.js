import { LayoutConfigsActionsTypes } from "./layoutConfigs.types";

const INITIAL_STATE = {
    folderLayoutConfig: 0
}


const layoutConfigsReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case LayoutConfigsActionsTypes.SET_FOLDER_LAYOUT_TYPE:
            return{
                ...state,
                folderLayoutConfig: action.payload
            }
        default:
            return state;
    }

}

export default layoutConfigsReducer;
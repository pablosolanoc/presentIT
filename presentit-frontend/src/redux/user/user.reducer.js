import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    userLanguage: 'es',
    CSRFToken: null
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.SET_USER_LANGUAGE:
            return {
                ...state,
                userLanguage: action.payload
            }
        case UserActionTypes.SET_CSRF_TOKEN:
            return {
                ...state,
                CSRFToken: action.payload
            }
        case UserActionTypes.SET_CURRENT_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload
            }
        case UserActionTypes.SET_CURRENT_REFRESH_TOKEN:
            return {
                ...state,
                refreshToken: action.payload
            }
        
        default:
            return state;
    }
}

export default cartReducer;
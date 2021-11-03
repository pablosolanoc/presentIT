import UserActionTypes from './user.types';

const INITIAL_STATE = {
    user: null,
    accessToken: null,
    refreshToken: null
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            };
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
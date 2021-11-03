
import userReducer from './user/user.reducer';
import {combineReducer} from 'redux';

const rootReducer = combineReducer({
    user: userReducer,
})

export default rootReducer;
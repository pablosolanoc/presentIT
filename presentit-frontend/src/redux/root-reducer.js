
import userReducer from './user/user.reducer';
import structureReducer from './structure/structure.reducer';
import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';

import  {persistReducer} from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'structure']
}

const rootReducer = combineReducers({
    user: userReducer,
    structure: structureReducer
})

export default persistReducer(persistConfig, rootReducer);
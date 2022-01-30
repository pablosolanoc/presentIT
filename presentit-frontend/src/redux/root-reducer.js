
import userReducer from './user/user.reducer';
import structureReducer from './structure/structure.reducer';
import layoutConfigsReducer from './layoutConfigs/layoutConfigs.reducer';
import filesFoldersReducer from './filesFolders/filesFolders.reducer';
import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';

import  {persistReducer} from 'redux-persist';



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'structure', 'layoutConfigs']
}

const rootReducer = combineReducers({
    user: userReducer,
    structure: structureReducer,
    layoutConfigs: layoutConfigsReducer,
    filesFolders: filesFoldersReducer
})

export default persistReducer(persistConfig, rootReducer);
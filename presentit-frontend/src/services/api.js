import axios from 'axios';
import { debug } from 'debug';
import {store} from '../redux/store';
import {setCurrentUser, setCSRFToken} from '../redux/user/user.actions';

const handleUnauthorized = (error) => {
    store.dispatch(setCSRFToken(null));
    store.dispatch(setCurrentUser(null));
}

const api = axios.create({
    baseURL: `${process.env.REACT_APP_BACK_END_ROUTE}`,
    withCredentials: true
});

const getRequestAuthorized = async (url, config) => {
    try{
        const response = await api.get(url, config);
        return response;
    }catch(error){
        debug(error);
        if(error.response.status === 401){
            handleUnauthorized(error);
        }else{
            console.log('Handling Other error');
        }
        return false;
    }
};

const postRequestAuthorized = async (url, data, config, manageResponse) => {
    // api.post(url)
    // .then(manageResponse)
    // .catch(handleUnauthorized);
};

const putRequestAuthorized = async (url, data, config, manageResponse) => {
    // api.post(url)
    // .then(manageResponse)
    // .catch(handleUnauthorized);
};

const deleteRequestAuthorized = async (url, data, config, manageResponse) => {
    // api.post(url)
    // .then(manageResponse)
    // .catch(handleUnauthorized);
};

export default api;
export {getRequestAuthorized, postRequestAuthorized, putRequestAuthorized, deleteRequestAuthorized};


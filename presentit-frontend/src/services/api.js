import axios from 'axios';

const handleUnauthorized = (error) => {
    console.log('Handling Unauthorized');
}

const api = axios.create({
    baseURL: `${process.env.REACT_APP_BACK_END_ROUTE}`,
    withCredentials: true
});

const getRequestAuthorized = async (url, manageOkResponse, config) => {
    try{
        const response = await api.get(url, config);
        manageOkResponse(response);
    }catch(error){
        if(error.status === 401){
            handleUnauthorized(error, manageOkResponse);
        }else{
            console.log('Handling Other error');
        }
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


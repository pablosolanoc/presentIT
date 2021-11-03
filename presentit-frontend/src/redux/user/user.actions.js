

const setCurrentUser = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user
});

const setCurrentAccessToken = (accessToken) => ({
    type: 'SET_CURRENT_ACCESS_TOKEN',
    payload: accessToken
});

const setCurrentRefreshToken = (refreshToken) => ({
    type: 'SET_CURRENT_REFRESH_TOKEN',
    payload: refreshToken
});



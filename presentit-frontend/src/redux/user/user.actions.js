

export const setCurrentUser = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user
});

export const setUserLanguage = (language) => ({
    type: 'SET_USER_LANGUAGE',
    payload: language
});

export const setCurrentAccessToken = (accessToken) => ({
    type: 'SET_CURRENT_ACCESS_TOKEN',
    payload: accessToken
});

export const setCurrentRefreshToken = (refreshToken) => ({
    type: 'SET_CURRENT_REFRESH_TOKEN',
    payload: refreshToken
});



var debug = require('debug')('PRESENTIT:tokenRefresh');

var {google} = require('googleapis');

const getAccessToken = async (req, refreshToken) => {
    try{
        const oauth2Client = new google.auth.OAuth2(
            process.env.oAuth_Client_Id,
            process.env.oAuth_Client_Secret,
            process.env.oAuth_Redirect
        );

        oauth2Client.setCredentials({
            refresh_token: refreshToken
        });

        debug('holapff');

        const tokens = await oauth2Client.refreshAccessToken();
        debug(tokens.credentials.access_token);
        debug('hola');
        req.session.user.access_token = tokens.credentials.access_token;
        return true;

    }catch(error){
        return false;
    }
}


module.exports = getAccessToken;

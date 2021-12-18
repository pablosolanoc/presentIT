var debug = require('debug')('PRESENTIT:checkAuthenticationState');

const checkCredentials = (req, res, next) => {
    debug('Making Request TO check if user still Signed In\n\n');
    if(req.session && req.session.user && req.session.user.access_token && req.session.user.refresh_token){
        return next();
    }
    return res.sendStatus(401);
}


module.exports = {checkCredentials};
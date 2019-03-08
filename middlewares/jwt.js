const jwtUtils = require('../utils/jwt');

module.exports = (req, res, next) => {
    jwtUtils.validateToken(req.cookies.token, (err, payload) => {
        if (err) {
            res.status(401).json({message: 'Unauthorized'});
        } else {
            if (!req.payload) {
                req.payload = payload;
            }
            next();
        }
    });
};

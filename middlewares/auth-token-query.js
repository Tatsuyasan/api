// Middleware example
// const authTokenQuery = require('./middlewares/auth-token-query');
// app.use(authTokenQuery('1234'));

module.exports = token => {
    return (req, res, next) => {
        if (!req.query.token || req.query.token !== token) {
            res.status(500).json({
                message: 'Get Away'
            });
            return;
        }
        next();
    };
};

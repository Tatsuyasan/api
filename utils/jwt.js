const jwt = require('jsonwebtoken');
const JWT_SIGN_TOKEN = 'sf54@sdf45ds:!ee#@xwcLk87ds2Cd';

exports.generateToken = (user, callback) => {
    jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        JWT_SIGN_TOKEN,
        {
            algorithm: 'HS256',
            expiresIn: 30
        },
        callback
    );
};

exports.validateToken = (token, callback) => {
    jwt.verify(token, JWT_SIGN_TOKEN, callback);
}
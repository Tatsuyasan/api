/**
 * User controllers.
 */

const user = require('../models/user');
const jsonUtils = require('../utils/json');
const logger = require('../utils/logger');
const jwtUtils = require('../utils/jwt');

exports.register = (req, res) => {
    req.body.createdAt = new Date();

    user.register(req.body)
        .then(
            u => {
                u.password = '';
                jsonUtils.send(res, 201, u);
            },
            err => {
                logger.error(err);
                jsonUtils.internalErr(res);
            }
        );
};

exports.authenticate = (req, res) => {
    user.authenticate(req.body).then(
        u => {
            u.password = '';

            jwtUtils.generateToken(u, (err, token) => {
                res.cookie('token', token, {
                    path: '/',
                    maxAge: 1000 * 60,
                    httpOnly: true, 
                    secure: false
                });
                jsonUtils.send(res, 200, u);
            });
        },
        err => {
            logger.error(err);
            jsonUtils.send(res, 401, {message: 'Authentication failed'});
        }
    );
};
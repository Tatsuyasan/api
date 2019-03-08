/**
 * User model.
 */

const schema = require('../schemas/user');
const password = require('../utils/password');
const User = mongoose.model('User', schema.user);

exports.register = register;
exports.authenticate = authenticate;

function register(data) {
    return password.hash(data.password).then(
        hash => {
            data.password = hash;
            return User(data).save();
        }
    );
}

function authenticate(data) {
    return User.findOne({email: data.email})
        .then(
            user => {
                if (!user) {
                    throw new Error('user not found');
                }

                return password.verify(data.password, user.password).then(
                    ok => {
                        if (!ok) {
                            throw new Error('user password is invalid');
                        }
                        return user;
                    }
                );
            },
        );
}
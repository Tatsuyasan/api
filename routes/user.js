/**
 * User routes.
 */

const controllers = require('../controllers/user');

app.post('/register', controllers.register);
app.post('/authenticate', controllers.authenticate);

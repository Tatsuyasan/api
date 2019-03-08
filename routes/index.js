/**
 * Default routes.
 */

const controllers = require('../controllers');
app.get('/', controllers.home);

// Routes
require('./todo');
require('./user');

/**
 * Todo routes
 */

const controllers = require('../controllers/todo');

api.get('/todo/tasks', controllers.all);
api.put('/todo/tasks', controllers.update);
api.post('/todo/tasks', controllers.create);
api.get('/todo/tasks/:id', controllers.find);
api.delete('/todo/tasks/:id', controllers.remove);

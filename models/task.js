/**
 * Task model.
 * 
 * Wed Mar 06 2019 14:49:06 GMT+0100
 */

const schema = require('../schemas/task');
const Task = mongoose.model('Task', schema.task);

exports.all = all;
exports.findById = findById;
exports.create = create;
exports.remove = remove;
exports.update = update;

/**
 * All retrieves all tasks.
 */
function all() {
    return Task.find();
}

/**
 * Find finds a task by its ID.
 */
function findById(id) {
    return Task.findById(id);
}

/**
 * Create creates a new task.
 */
function create(data) {
    return new Task(data).save(data);
}

/**
 * Remove removes a task by its ID.
 * 
 * @param {number} id 
 */
function remove(id) {
    return Task.findByIdAndRemove(id);
}

/**
 * Update updates a task.
 * 
 * @param {Object} data 
 */
function update(data) {
    return Task.findByIdAndUpdate(data._id, data);
}

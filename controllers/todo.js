/**
 * Todo controller.
 */
const logger = require('../utils/logger');
const task = require('../models/task');
const jsonUtils = require('../utils/json');

exports.find = find;
exports.all = all;
exports.update = update;
exports.create = create;
exports.remove = remove;

function find(req, res) {
    const id = req.params.id;

    if (!id) {
        jsonUtils.notFound(res);
        return;
    }

    task.findById(id).then(
        data => {
            if (!data) {
                jsonUtils.notFound(res);
                return;
            }
            res.json(data);
        },
        err => {
            logger.error(err);
            jsonUtils.notFound(res);
        }
    );
}

function update(req, res) {
    task.update(req.body).then(
        () => {
            jsonUtils.noContent(res);
        },
        err => {
            logger.error(err);
            jsonUtils.internalErr(res);
        }
    );
}

function create(req, res) {
    task.create(req.body).then(
        data => {
            req.body._id = data._id;
            res.json(req.body);
        },
        err => {
            logger.error(err);
            res.json(err);
        }
    )
}

function remove(req, res) {
    const id = req.params.id;

    if (!id) {
        jsonUtils.notFound(res);
        return;
    }

    task.remove(id).then(
        () => {
            jsonUtils.noContent(res);
        },
        err => {
            logger.error(err);
            jsonUtils.notFound(res);
        }
    );
}

function all(req, res) {
    task.all().then(
        tasks => {
            res.json(tasks);
        },
        err => {
            logger.error(err);
            jsonUtils.internalErr(res);
        }
    )
}
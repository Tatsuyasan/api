// Logger
const { createLogger, format, transports } = require('winston');
const { combine, errors, json } = format;

let logger = null;

function init() {
    if (!logger) {
        logger = createLogger({
            format: combine(
                errors({ stack: false }),
                json(),
                format.colorize({ all: true }),
                format.simple()
            ),
            transports: [
                new transports.Console(),
            ]
        });
    }
    return logger;
}

module.exports = init();
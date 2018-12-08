const appRoot = require('app-root-path');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
const myFormat = printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
  });
const options = {
    file: {
        level: 'info',
        filename: `${appRoot.path}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, 
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
        }
}
const logger = createLogger({
    format: combine(
        label({ label: 'message' }),
        timestamp(),
        myFormat
      ),
    transports: [
        new transports.File(options.file),
        new transports.Console(options.console)
    ],
    exitOnError: false
});

logger.stream = {
    write: (message, encoding) => {
        logger.info(message);
    }
};

module.exports = logger;
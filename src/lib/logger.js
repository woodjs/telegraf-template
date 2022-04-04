const winston = require('winston');
require('winston-daily-rotate-file');
const { env, config } = require('../config');

const getFileFormat = () =>
	winston.format.combine(
		winston.format.colorize(),
		winston.format.timestamp(),
		winston.format.printf(
			(info) => `=========${info.timestamp}=========\n${info.message}`
		)
	);

const getConsoleFormat = () => {
	if (env === 'development') {
		return winston.format.combine(
			winston.format.colorize(),
			winston.format.timestamp(),
			winston.format.printf(
				(info) => `${info.timestamp} ${info.level}: ${info.message}`
			)
		);
	}

	return getFileFormat();
};

const init = () =>
	winston.createLogger({
		level: 'info',
		format: getConsoleFormat(),
	});

const logger = init();

if (env === 'production') {
	logger.add(
		new winston.transports.DailyRotateFile({
			filename: `error-%DATE%.log`,
			datePattern: `YYYY-MM-DD`,
			maxFiles: `14d`,
			format: getFileFormat(),
			dirname: config.logs.error,
			level: 'error',
		})
	);
} else {
	logger.add(new winston.transports.Console());
}

exports.logger = logger;

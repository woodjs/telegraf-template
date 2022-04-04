require('dotenv').config();
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const config = {
	development: {
		token: process.env.BOT_TOKEN,
		logs: {
			error: `${path.resolve()}/${process.env.ERROR_LOG}`,
		},
	},
	production: {
		token: process.env.BOT_TOKEN,
		logs: {
			error: `${path.resolve()}/${process.env.ERROR_LOG}`,
		},
	},
};

exports.env = env;
exports.config = config[env];

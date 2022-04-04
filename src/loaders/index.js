const { logger } = require('../lib/logger');
const { telegrafLoader } = require('./telegraf.loader');

module.exports.appLoader = async (app) => {
	await telegrafLoader(app);
	logger.info('!!LOADER: Telegraf Initialized');
};

const { Telegraf } = require('telegraf');
const { config } = require('./config');
const { logger } = require('./lib/logger');
const { appLoader } = require('./loaders');

const bootstrap = async () => {
	const bot = new Telegraf(config.token);

	try {
		const { token } = config;

		if (!token || token.length === 0) throw Error('Отсутствует токен');

		await appLoader(bot);

		logger.info('Бот успешно запущен');
	} catch (err) {
		logger.error(err.stack);
	}
};

bootstrap();

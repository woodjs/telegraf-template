const { logger } = require('../lib/logger');
const StartService = require('../services/Start.service');

class StartController {
	static init(ctx) {
		const message = StartService.findMessage();
		logger.info('Обрабатываю команду /start');
		return ctx.reply(message);
	}
}

module.exports.StartController = StartController;

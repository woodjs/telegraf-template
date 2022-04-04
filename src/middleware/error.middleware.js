/* eslint-disable consistent-return */
const { logger } = require('../lib/logger');
const BotError = require('../services/Error.service');

module.exports.errorHandler = async (err, ctx) => {
	if (err instanceof BotError) {
		return ctx.reply(err.message);
	}

	logger.error(err.stack);
};

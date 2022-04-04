const { errorHandler } = require('../middleware/error.middleware');

module.exports.telegrafLoader = async (bot) => {
	require('../handlers')(bot);
	// throw Error('Тестовая ошибка');
	bot.catch(errorHandler).launch();

	return bot;
};

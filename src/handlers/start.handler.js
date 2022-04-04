const { StartController } = require('../controllers/Start.controller');

module.exports = (bot) => {
	bot.start(StartController.init);
};

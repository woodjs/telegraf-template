class BotError extends Error {
	constructor(message) {
		super();
		this.message = message;
	}

	static message(message) {
		return new BotError(message);
	}
}

module.exports = BotError;

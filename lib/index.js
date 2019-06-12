/**
 * Validates a command name for npm bin entries.
 * @param {string} name - Command name to validate.
 * @returns {boolean|string} - `true` if the name is valid, an error message
 *   otherwise.
 */
exports.validateCommandName = function(name) {
	return (/^[a-z0-9-]+$/).test(name) ||
		'Command name must be dash-separated lower case';
};

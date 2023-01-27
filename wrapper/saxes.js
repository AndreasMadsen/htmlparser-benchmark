var saxes = require('saxes');

module.exports = function (html, callback) {
	var parser = new saxes.SaxesParser();

	parser.onend = callback;
	parser.onerror = callback;

	// This is throwing errors for any syntax error. Ignore.
	parser.on('error', () => {});
	parser.on('end', callback);

	parser.write(html);
	parser.end();
};

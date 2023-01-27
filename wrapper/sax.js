const sax = require('sax');

module.exports = function (html, callback) {
	const parser = sax.parser(false);

	parser.onend = callback;
	parser.onerror = callback;
	parser.write(html);
	parser.close();
};

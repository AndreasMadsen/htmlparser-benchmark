var sax = require('sax');

module.exports = function (html, callback) {
	var parser = sax.parser(false);

	parser.onend = callback;
	parser.onerror = callback;
	parser.write(html);
	parser.close();
};

const htmlparser = require('htmlparser');

module.exports = function (html, callback) {
	const handler = new htmlparser.DefaultHandler();
	const parser = new htmlparser.Parser(handler);
	parser.parseComplete(html);
	callback(null);
};

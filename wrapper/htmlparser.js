var htmlparser = require('htmlparser');

module.exports = function (html, callback) {
	var handler = new htmlparser.DefaultHandler();
	var parser = new htmlparser.Parser(handler);
	parser.parseComplete(html);
	callback(null);
};

var htmlparser2 = require('htmlparser2'),
	Parser = htmlparser2.Parser,
	Handler = htmlparser2.DomHandler;

module.exports = function (html, callback) {
	var handler = new Handler();
	var parser = new Parser(handler);
	parser.parseComplete(html);
	callback(null);
};

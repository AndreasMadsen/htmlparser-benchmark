const { Parser, DomHandler } = require('htmlparser2');

module.exports = function (html, callback) {
	const handler = new DomHandler();
	const parser = new Parser(handler);
	parser.parseComplete(html);
	callback(null);
};

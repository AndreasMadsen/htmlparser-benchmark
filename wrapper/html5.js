const Parser = require('html5').SAXParser;

module.exports = function (html, callback) {
	const parser = new Parser();
	const noop = function () {};
	parser.contentHandler = {
		startDocument: noop,
		endDocument: noop,
		startElement: noop,
		endElement: noop,
		characters: noop,
	};
	parser.parse(html);
	callback();
};

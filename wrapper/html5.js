var Parser = require('html5').SAXParser;

module.exports = function (html, callback) {
	var parser = new Parser();
	var noop = function () {};
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

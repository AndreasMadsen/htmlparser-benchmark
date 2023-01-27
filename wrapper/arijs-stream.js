var Parser = require('@arijs/stream-xml-parser').XMLParser;

module.exports = function (html, callback) {
	var parser = new Parser(nop);
	parser.end(html);
	callback();
};

function nop() {}

const Parser = require('@arijs/stream-xml-parser').XMLParser;

module.exports = function (html, callback) {
	const parser = new Parser(nop);
	parser.end(html);
	callback();
};

function nop() {}

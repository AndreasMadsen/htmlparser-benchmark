module.exports = LibXmlJsParser;

var libxml = require("libxmljs");

function noop(){}

function LibXmlJsParser() {
	var parser = new libxml.SaxPushParser(noop);
	this.write = function(s) {
		parser.push(s, false);
	};
	this.end = noop;
}
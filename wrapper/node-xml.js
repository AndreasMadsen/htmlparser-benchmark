module.exports = NodeXmlParser;

var node_xml = require("node-xml");

function noop(){}

function NodeXmlParser() {
	var parser = new node_xml.SaxParser(noop);
	this.write = function(s) {
		parser.parseString(s);
	};
	this.end = noop;
}
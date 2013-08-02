module.exports = HtmlParser;

var htmlparser = require('htmlparser');

function noop(){}

function HtmlParser() {
	var handler = new htmlparser.DefaultHandler();
	var parser = new htmlparser.Parser(handler);
	this.parse = function(s) {
		parser.parse(s);
	};
	this.end = function(){
		parser.end();
	};
}
module.exports = HTMLParser;

var htmlParser = require("html-parser");

function HTMLParser() {
	var cbs = {};
	this.write = function(s){
		htmlParser.parse(s, cbs);
	};
	this.end = function(){};
}
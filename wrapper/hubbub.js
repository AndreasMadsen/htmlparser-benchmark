module.exports = Hubbub;

var hubbub = require('hubbub');

function noop(){}

function Hubbub() {
	var handler = new hubbub.DefaultHandler();
	var parser = new hubbub.Parser(handler);
	this.parse = function(s) {
		parser.parse(s);
	};
	this.end = function(){
		parser.end();
	};
}
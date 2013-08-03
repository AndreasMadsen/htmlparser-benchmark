var hubbub = require('hubbub');

module.exports = function(html, callback) {
	var handler = new hubbub.DefaultHandler();
	var parser = new hubbub.Parser(handler);
	parser.parseComplete(html);
	callback(null);
};

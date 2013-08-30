
var Parser = require('parse5').Parser;

module.exports = function (html, callback) {
	var parser = new Parser();
	parser.parse(html);
	callback();
};

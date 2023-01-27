var Parser = require('htmlparser2').Parser;

module.exports = function (html, callback) {
	var parser = new Parser({
		onend: callback,
		onerror: callback,
	});
	parser.end(html);
};

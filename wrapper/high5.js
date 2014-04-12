var Parser = require("high5");

module.exports = function (html, callback) {
	var parser = new Parser({
		onend: callback,
		onerror: callback
	});
	parser.end(html);
};

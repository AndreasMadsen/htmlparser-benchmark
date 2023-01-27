const { Parser } = require('htmlparser2');

module.exports = function (html, callback) {
	const parser = new Parser({
		onend: callback,
		onerror: callback,
	});
	parser.end(html);
};

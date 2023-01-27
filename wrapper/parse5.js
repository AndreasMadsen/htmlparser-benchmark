var parse5 = require('parse5');

module.exports = function (html, callback) {
	parse5.parse(html.toString());
	callback();
};

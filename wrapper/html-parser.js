var htmlParser = require('html-parser');

module.exports = function (html, callback) {
	htmlParser.parse(html, {});
	callback(null);
};

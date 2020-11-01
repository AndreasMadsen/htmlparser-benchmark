
var HTMLParser = require('node-html-parser');

module.exports = function (html, callback) {
	HTMLParser.parse(html);
	callback(null);
};

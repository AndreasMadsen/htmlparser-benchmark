var htmlParser = require("html-dom-parser");

module.exports = function (html, callback) {
	htmlParser(html);
	callback(null);
};

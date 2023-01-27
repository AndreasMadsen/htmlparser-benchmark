var htmljs = require('htmljs-parser');

module.exports = function (html, callback) {
	htmljs.createParser({}).parse(html);
	callback(null);
};

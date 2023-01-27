const libxml = require('libxmljs');

module.exports = function (html, callback) {
	new libxml.parseHtmlString(html);
	callback(null);
};

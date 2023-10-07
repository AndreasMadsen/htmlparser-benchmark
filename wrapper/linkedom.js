const { parseHTML } = require('linkedom');

module.exports = function (html, callback) {
  parseHTML(html);
	callback(null);
}
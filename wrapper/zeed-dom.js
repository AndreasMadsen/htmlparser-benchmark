const { parseHTML } = require('zeed-dom');

module.exports = function (html, callback) {
	parseHTML(html);
	callback(null);
};

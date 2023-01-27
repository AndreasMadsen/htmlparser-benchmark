var HTMLtoDOM = require('neutron-html5parser')();

module.exports = function (html, callback) {
	var noop = function () {};
	HTMLtoDOM.Parser(html, {
		start: noop,
		end: noop,
		chars: noop,
		comment: noop,
		doctype: noop,
	});

	callback(null);
};

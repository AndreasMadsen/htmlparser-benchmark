
var gumbo = require("gumbo-parser");

module.exports = function (html, callback) {
  gumbo(html);
	callback(null);
};

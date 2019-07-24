const html5parser = require("html5parser");

module.exports = (html, callback) => {
  html5parser.parse(html);
  callback(null);
};

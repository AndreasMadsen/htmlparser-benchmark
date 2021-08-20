const { parse } = require("node-html-parser");

module.exports = function (html, callback) {
    parse(html);
    callback(null);
};
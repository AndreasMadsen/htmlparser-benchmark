const tljs = require('@y21/tljs');
const { callbackify } = require('util');
tljs.initializeWasmSync();

const parse = callbackify(tljs.parse);
module.exports = function(html, callback) {
    parse(html, callback);
}

const tljs = require('@y21/tljs');
const { callbackify } = require('util');
tljs.initializeWasmSync();

module.exports = callbackify(tljs.parse);

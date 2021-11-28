const tljs = require('@y21/tljs');
tljs.initializeWasmSync();

module.exports = function(html, callback) {
    tljs.parse(html).then(() => callback());
}

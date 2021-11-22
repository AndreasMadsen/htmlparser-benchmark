const tljs = require('@y21/tljs');

module.exports = function(html, callback) {
    tljs.parse(html).then((dom) => {
        callback();
        dom.free();
    });
}

module.exports.setup = function(callback) {
    tljs.initializeWasm().then(() => callback());
}
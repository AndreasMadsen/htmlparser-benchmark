
var fs = require('fs');
var path = require('path');
var summary = require('summary');
var startpoint = require('startpoint');
var async = require('async');

var FILES = fs.readdirSync(path.resolve(__dirname, 'files'))
	.map(function (filename, index) {
		return {
			key: path.basename(filename, '.html'),
			file: path.resolve(__dirname, 'files', filename),
			index: index
		};
	});

module.exports = function (Parser, callback) {
	var TIMES = [];

	async.eachSeries(
		FILES,
		function (item, done) {
			var stream = startpoint(fs.readFileSync(item.file));
			console.log((item.index + 1) + ' / ' + FILES.length + ' ' + item.key);

			var tic = process.hrtime();
			var parser = new Parser({
				onend: function () {
					var toc = process.hrtime(tic);
					TIMES.push(toc);
					setImmediate(done.bind(null, null));
				}
			});
			stream.pipe(parser);
		},
		function () {
			var stat = summary(TIMES.map(function (time) {
				return (time[0] * 1e9 + time[1]) / 1e6;
			}));

			console.log(stat.mean().toPrecision(6) + ' ms/file ± ' + stat.sd().toPrecision(6));
			callback(null, stat);
		});
};

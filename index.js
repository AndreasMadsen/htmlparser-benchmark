
var fs = require('fs');
var path = require('path');
var util = require('util');
var events = require('events');

var async = require('async');
var summary = require('summary');

var FILES = fs.readdirSync(path.resolve(__dirname, 'files'))
	.map(function (filename, index) {
		return {
			key: path.basename(filename, '.html'),
			file: path.resolve(__dirname, 'files', filename)
		};
	});

function Benchmark(parser) {
	if (!(this instanceof Benchmark)) return new Benchmark(parser);

	this._parser = parser;
	async.mapSeries(FILES, this._file.bind(this), this._done.bind(this));
}
util.inherits(Benchmark, events.EventEmitter);
module.exports = Benchmark;

// The total amount of files
Benchmark.TOTAL = FILES.length;

// Parse a file
Benchmark.prototype._file = function (item, done) {
	var self = this;

	fs.readFile(item.file, 'utf8', function (err, html) {
		if (err) return done(err);

		var tic = process.hrtime();
		self._parser(html, function (err) {
			var toc = process.hrtime(tic);

			if (err) {
				done(err, toc);
			} else {
				self.emit('progress', item.key);
				done(null, toc);
			}
		});
	});
};

// Benchmark for this parser is done
Benchmark.prototype._done = function (err, times) {
	if (err) return this.emit('error', err);

	var stat = summary(times.map(function (time) {
		return time[0] * 1e3 + time[1] / 1e6;
	}));

	this.emit('result', stat);
};

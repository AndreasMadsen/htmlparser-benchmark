const fs = require('fs');
const path = require('path');
const events = require('events');

const async = require('async');
const summary = require('summary');

const FILES = fs
	.readdirSync(path.resolve(__dirname, 'files'))
	.map((filename) => ({
		key: path.basename(filename, '.html'),
		file: path.resolve(__dirname, 'files', filename),
	}));

class Benchmark extends events.EventEmitter {
	constructor(parser) {
		super();

		this._parser = parser;
		async.mapSeries(FILES, this._file.bind(this), this._done.bind(this));
	}
	// Parse a file
	_file(item, done) {
		fs.readFile(item.file, 'utf8', (err, html) => {
			if (err) {
				return done(err);
			}

			const tic = process.hrtime();
			this._parser(html, (err) => {
				const toc = process.hrtime(tic);

				if (err) {
					done(err, toc);
				} else {
					this.emit('progress', item.key);
					done(null, toc);
				}
			});
		});
	}
	// Benchmark for this parser is done
	_done(err, times) {
		if (err) {
			return this.emit('error', err);
		}

		const stat = summary(times.map((time) => time[0] * 1e3 + time[1] / 1e6));

		this.emit('result', stat);
	}
}

module.exports = Benchmark;

// The total amount of files
Benchmark.TOTAL = FILES.length;

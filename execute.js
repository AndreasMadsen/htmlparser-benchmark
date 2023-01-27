const fs = require('fs');
const path = require('path');
const async = require('async');
const { fork } = require('child_process');

const wrappers = fs
	.readdirSync(path.join(__dirname, 'wrapper'))
	.map((filename) => ({
		name: path.basename(filename, '.js'),
		parser: path.join(__dirname, 'wrapper', filename),
	}));

const MAX_WIDTH = Math.max(...wrappers.map((wrapper) => wrapper.name.length));

const stats = [];

async.eachSeries(
	wrappers,
	(item, done) => {
		const runner = fork(path.join(__dirname, '_run.js'));

		runner.send(item);
		runner.on('message', (stat) => {
			const description = `${item.name.padEnd(
				MAX_WIDTH,
			)}: ${stat.mean.toPrecision(6)} ms/file ± ${stat.sd.toPrecision(6)}`;
			stats.push({ stat, name: item.name, description });
			console.log('\n%s', description);
		});

		runner.on('close', (n) => {
			if (n) {
				console.log('%s failed (exit code %d)', item.name, n);
			}
			done();
		});
	},
	() => {
		// Write all stats to a text file, ordered by mean time
		fs.writeFileSync(
			path.join(__dirname, 'stats.txt'),
			stats
				.sort((a, b) => a.stat.mean - b.stat.mean)
				.map(({ description }) => description)
				.join('\n'),
		);
	},
);

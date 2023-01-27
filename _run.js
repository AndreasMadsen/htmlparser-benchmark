const Benchmark = require('./index.js');
const ProgressBar = require('progress');

process.on('uncaughtException', (e) => {
	process.exit(1);
});

process.on('message', (item) => {
	const bar = new ProgressBar('[:bar] :current / :total', {
		total: Benchmark.TOTAL,
		complete: '=',
		incomplete: ' ',
		width: 50,
	});

	const parser = require(item.parser);
	const bench = new Benchmark(parser);

	bench.on('progress', () => {
		bar.tick();
	});

	bench.once('result', (stat) => {
		process.send({
			mean: stat.mean(),
			sd: stat.sd(),
		});
		process.exit(0);
	});
});


var Benchmark = require('./index.js');
var ProgressBar = require('progress');

function benchmark(parser) {
	var bar = new ProgressBar('[:bar] :current / :total', {
		total: Benchmark.TOTAL,
		complete: '=',
		incomplete: ' ',
		width: 50
	});

	var bench = new Benchmark(parser);

	bench.on('progress', function () {
		bar.tick();
	});

	bench.once('result', function (stat) {
		process.send({
			mean: stat.mean(),
			sd: stat.sd()
		});
		process.exit(0);
	});
}

process.on('uncaughtException', function(e) {
	process.exit(1);
});

process.on('message', function (item) {
	var parser = require(item.parser);
	// run wrapper setup if needed
	if (parser.setup) {
		parser.setup(function() {
			benchmark(parser);
		});
	} else {
		benchmark(parser);
	}
});

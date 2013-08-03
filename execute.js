
var fs = require('fs');
var path = require('path');
var async = require('async');
var Benchmark = require('./index.js');
var ProgressBar = require('progress');

var wrappers = fs.readdirSync(path.resolve(__dirname,'wrapper'))
	.map(function (filename) {
		return {
			name: path.basename(filename, '.js'),
			parser: require('./wrapper/' + filename)
		};
	});

function stat2time(stat) {
	return stat.mean().toPrecision(6) + ' ms/file ± ' + stat.sd().toPrecision(6);
}

function equalWidth(name) {
	var left = 15 - name.length;
	var str = name;
	for (var i = 0; i < left; i++) str += ' ';
	return str;
}

async.eachSeries(
	wrappers,
	function (item, done) {
		var bar = new ProgressBar('[:bar] :current / :total', {
			total: Benchmark.TOTAL,
			complete: '=',
			incomplete: ' ',
			width: 50
		});

		var bench = new Benchmark(item.parser);

		bench.on('progress', function () {
			bar.tick();
		});

		bench.once('result', function (stat) {
			console.log('\n' + equalWidth(item.name) + ': ' + stat2time(stat));
			done(null);
		});
	},
	function () {}
);

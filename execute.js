
var fs = require('fs');
var path = require('path');
var async = require('async');
var fork = require('child_process').fork;

var wrappers = fs.readdirSync(path.join(__dirname, 'wrapper'))
	.map(function (filename) {
		return {
			name: path.basename(filename, '.js'),
			parser: path.join(__dirname, 'wrapper', filename)
		};
	});

var MAX_WIDTH = Math.max.apply(Math, wrappers.map(function (wrapper) {
	return wrapper.name.length;
}));

function equalWidth(name) {
	var left = MAX_WIDTH - name.length;
	var str = name;
	for (var i = 0; i < left; i++) str += ' ';
	return str;
}

async.eachSeries(
	wrappers,
	function (item, done) {
		var runner = fork(path.join(__dirname, '_run.js'));
		runner.send(item);
		runner.on('message', function (stat) {
			console.log(
				'\n%s: %s ms/file ± %s',
				equalWidth(item.name),
				stat.mean.toPrecision(6),
				stat.sd.toPrecision(6)
			);
		});

		runner.on('close', function (n) {
			if (n) {
				console.log('%s failed (exit code %d)', item.name, n);
			}
			done();
		});
	},
	function () {}
);

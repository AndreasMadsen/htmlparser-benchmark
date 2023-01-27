# htmlparser-benchmark

> Simple benchmark for different htmlparsers using real-life data

## What is this good for?

Don't use a particular parser just because it shows good results in this benchmark.
Instead, this benchmark is best for comparing changes between individual versions of parsers,
as well as for parser authors to see how much room for improvement there is.

Even though all libraries included in this benchmark parse something HTML-like, most don't fully follow
the HTML spec. As of August 2021, [`parse5`](https://www.npmjs.com/package/parse5) is the only
fully spec compliant HTML parser available for NodeJS. If you are okay with slightly different results,
have a look at the libraries benchmarked here and pick the one with the ideal trade-offs for your scenario.

## Installation

```shell
npm install htmlparser-benchmark
```

## How to run

#### Use as a module

```javascript
const Benchmark = require('htmlparser-benchmark');
const { Parser } = require('htmlparser2');

const bench = new Benchmark((html, callback) => {
	const parser = new Parser({
		onend: callback,
		onerror: callback,
	});
	parser.end(html);
});

bench.on('progress', (key) => {
	console.log(`finished parsing ${key}.html`);
});

bench.on('result', (stat) => {
	console.log(
		`${stat.mean().toPrecision(6)} ms/file ± ${stat.sd().toPrecision(6)}`,
	);
});
```

Where `stat` is a [Summary](https://github.com/AndreasMadsen/summary) object.

#### Use the script

You can also just run `npm test`, that will benchmark all the modules listed
in the `wrapper` directory. Note that you will need to install the `dev-dependencies`
first.

```shell
cd htmlparser-benchmark
npm install
npm test
```

## License

**The software is license under "MIT"**

> Copyright (c) 2013 Andreas Madsen
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

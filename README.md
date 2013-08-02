#htmlparser2-benchmark

> Simple benchmark for [htmlparser2](https://github.com/fb55/htmlparser2) using real-life data

## Installation

```sheel
npm install htmlparser2-benchmark
```

## How to run

You can either use this as a module:

```javascript
var bench = require('htmlparser2-benchmark');

bench(require('htmlparser2').Parser, function (err, stat) {

});
```

Where `stat` is a [Summary](https://github.com/AndreasMadsen/summary) object,
note that executing this method will output progress and result to `stdout`.

You can also just run `npm test` that will also run the benchmark as long as
the `htmlparser2` module exists somewhere in the module search path.

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
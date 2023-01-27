const AriJS = require('@arijs/stream-xml-parser');

module.exports = function (html, callback) {
	const builder = new AriJS.TreeBuilder({
		element: AriJS.elementDefault(),
	});
	const parser = new AriJS.XMLParser(builder.parserEvent.bind(builder));
	parser.end(html);
	callback();
};

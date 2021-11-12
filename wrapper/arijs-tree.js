
var AriJS = require("@arijs/stream-xml-parser");

module.exports = function (html, callback) {
	var builder = new AriJS.TreeBuilder({
		element: AriJS.elementDefault(),
	});
	var parser = new AriJS.XMLParser(builder.parserEvent.bind(builder));
	parser.end(html);
	callback();
};

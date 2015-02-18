var fs = require("fs");
var peg = require("pegjs");

var file = process.argv[2];

var grammar = peg.buildParser(fs.readFileSync("cil.peg", "utf8"));
var cil = fs.readFileSync(file, "utf8");

try {
  console.log(grammar.parse(cil));
} catch (e) {
  console.log(file + ":" + e.line + ":" + e.column + " " + e.message);
}
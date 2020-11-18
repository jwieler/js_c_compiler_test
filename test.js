var compiler = require("compilex");
var fs = require("fs");

var code = "";
try {
    var data = fs.readFileSync("test.c", "utf8");
    code = data.toString();
} catch (e) {
    console.log("Error:", e.stack);
}

console.log(code);
var options = { stats: true }; //prints stats on console
compiler.init(options);
var envData = { OS: "linux", cmd: "gcc" }; // ( uses gcc command to compile )
compiler.compileCPP(envData, code, function (data) {
    console.log(data.error);
    console.log(data.output);
});

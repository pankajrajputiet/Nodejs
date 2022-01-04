var fs = require("fs");
var data = fs.readFileSync("read.txt");
console.log(data);
console.log(data.toString());
console.log("end here");

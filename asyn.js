var fs = require("fs");
fs.readFile("read.txt",function(err,data){
    if(err){
        console.error("found error");
    }
    setTimeout(() => {
        console.log("display after two second")
    },2000);
});
console.log("start here");

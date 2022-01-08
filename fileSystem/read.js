let fs = require("fs");
let http = require("http");
http.createServer((req,res) => {
  fs.readFile("read.txt",(err,data)=>{
  res.writeHead(200,{"content-type" : "text/html"});
  res.write(data);
  return res.end();
  });
}).listen(8080);

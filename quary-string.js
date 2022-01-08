
let http = require("http");
let url = require("url");
http.createServer((req,res)=> {
  res.writeHead(200,{"content-type" : "text/html"});
  let q = url.parse(req.url, true).query;
  var text = q.year + " " +q.month;
  res.end(text);
}).listen(8080);

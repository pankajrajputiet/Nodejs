const fs = require("fs");
fs.readFile("fs/bio.txt",(err,data)=> {
      if(err) throw err;
      console.log(data);
});

const fs = require("fs");
fs.mkdir("fs",(err,data)=> {
      if(err) throw err;
      console.log("new folder created!!!!!!!!!!");
});

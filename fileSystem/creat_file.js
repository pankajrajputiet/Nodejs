const fs = require("fs");
fs.writeFile("fs/bio.txt"," this is text file!!!!!!!!",(err,data)=> {
      if(err) throw err;
      console.log("new file created!!!!!!!!!!");
});

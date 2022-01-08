let fs = require("fs");
  fs.writeFile("read.txt","**********++++++++++*********",(err,data)=>{
if(err){
  throw err
}
else{
  console.log("saved!!!!!!!!!!!");
}  
  });

var fs = require('fs');

fs.rename('mynewfile2.txt',"rename.txt", function (err, data) {
  if (err){
    throw err;}
    else
  console.log('renamed!!!!!!!!!!!!');
});

var fs = require('fs');

fs.unlink('mynewfile4.txt', function (err, data) {
  if (err){
    throw err;}
    else
  console.log('deleted!!!!!!!!!!!!');
});

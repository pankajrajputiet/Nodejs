var fs = require('fs');

fs.writeFile('mynewfile4.txt', '*******', function (err, data) {
  if (err){
    throw err;}
    else
  console.log('created!');
});

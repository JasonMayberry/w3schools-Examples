var fs = require('fs');

//append content at the end of the file:
fs.appendFile('mynewfile1.txt', ' Have a nice day!\n', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

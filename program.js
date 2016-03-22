var printer = require('./modules/fsprinter.js');

var filePath = process.argv[2];
var fileExtension = process.argv[3];

printer(filePath, fileExtension, function(err, list) {
  list.forEach(function(item) {
    console.log(item);
  });
});

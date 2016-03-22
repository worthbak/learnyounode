var fs = require('fs');
var path = require('path');

// brittle, but yolo
var filePath = process.argv[2];
var fileExtension = "." + process.argv[3];

fs.readdir(filePath, function(err, list) {

  list.forEach(function(item) {
    var extension = path.extname(item)

    if (extension === fileExtension) {
      console.log(item);
    }
  });
});

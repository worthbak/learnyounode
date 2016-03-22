var fs = require('fs');
var path = require('path');


module.exports = function (directory, filterExtension, callback) {
  fs.readdir(directory, function(err, list) {

    if (err) {
      callback(err, null);
      return;
    } else {
      var matchingList = Array();
      list.forEach(function(item) {
        var extension = path.extname(item)

        if (extension === ("." + filterExtension)) {
          matchingList.push(item);
        }
      });

      /// alternate solution:
      // list = list.filter(function (file) {
      //   return path.extname(file) === '.' + filterStr
      // })

      callback(null, matchingList);
    }
  });
};

// module.exports.listFiles = listFiles;

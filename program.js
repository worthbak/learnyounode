var fs = require('fs');

var givenFile = process.argv[2];

if (givenFile) {
  // console.log(givenFile);

  fs.readFile(givenFile, function(err, buffer) {
    // Callback
    var newLineCount = buffer.toString().split("\n").length - 1
    console.log(newLineCount);
  });
} else {
  console.log("oh no");
}

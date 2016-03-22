var fs = require('fs');

var givenFile = process.argv[2];

if (givenFile) {
  // console.log(givenFile);

  var buffer = fs.readFileSync(givenFile);
  // console.log(buffer);
  var fileString = buffer.toString()
  // console.log(fileString);

  var stringArray = fileString.split("\n");
  console.log(stringArray.length - 1);
} else {
  console.log("oh no");
}

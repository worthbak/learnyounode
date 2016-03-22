var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
  response.setEncoding("utf8");
  var stringData = ""

  response.on('data', function(data) {
    stringData += data
  });
  response.on('error', console.error);

  response.on("end", function() {
    console.log(stringData.length);
    console.log(stringData);
  });
});

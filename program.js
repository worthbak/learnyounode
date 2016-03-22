var http = require('http');

var urls = process.argv.splice(2);
var responses = {};

urls.forEach(function(url) {

  http.get(url, function(response) {
    response.setEncoding("utf8");
    var stringData = ""

    response.on('data', function(data) {
      stringData += data
    });
    response.on('error', console.error);

    response.on("end", function() {
      // console.log(stringData.length);
      // console.log(stringData);
      responses[url] = stringData;

      if (Object.keys(responses).length === urls.length) {
        urls.forEach(function(item) {
          console.log(responses[item]);
        });
      }
    });
  });
});

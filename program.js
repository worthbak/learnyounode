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
      responses[url] = stringData;

      if (Object.keys(responses).length === urls.length) {
        urls.forEach(function(item) {
          console.log(responses[item]);
        });
      }
    });
  });
});

/*
official solution

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i) 
*/

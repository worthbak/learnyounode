// Requires
var http = require('http');
var fs = require('fs');

// Process argument variables
var arguments = process.argv.splice(2);
var port = arguments[0];
var filePath = arguments[1];

var server = http.createServer(function (req, res) {
  // official solution included this line; was the same otherwise
  // res.writeHead(200, { 'content-type': 'text/plain' })

  var fileStream = fs.createReadStream(filePath);

  fileStream.pipe(res);
});

server.listen(port);

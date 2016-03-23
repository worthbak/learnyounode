// Requires
var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
  if (req.method != 'POST') {
    return res.end('send me a POST!\n');
  };

  // req.toString().toUpperCase()
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);

});

if (port) {
  server.listen(port);
}

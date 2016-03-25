// Requires
var http = require('http');
var url = require('url');
var map = require('through2-map');
var fs = require('fs');
var datehelper = require('./modules/datehelper');

var port = process.argv[2];

if (!port) {
  port = 8080;
}

http.createServer(function (req, res) {
  var parsedURL = url.parse(req.url, true);
  var time = parsedURL.query.iso;
  var result;

  if (parsedURL.pathname === '/api/parsetime') {
    console.log("parsing the time! " + time);
    result = datehelper.parseTime(time);
  } else if (parsedURL.pathname === '/api/unixtime') {
    console.log("unixifying the time! " + time);
    result = datehelper.unixifyTime(time);
  } else if (parsedURL.pathname === '/api/gif') {
    console.log('html test!');
    fs.readFile('./test.html',function (err, data) {
      if (err) {
        console.error(err);
      }

      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': data.length
      });

      console.log(data.toString());
      res.write(data);
      res.end();
    });
    return;
  }

  if (result) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(result);
  } else {
    res.writeHead(404);
    res.end();
  }

}).listen(port)

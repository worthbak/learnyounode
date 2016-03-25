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

  switch (parsedURL.pathname) {
    case '/api/parsetime':
      console.log("parsing the time! " + time);
      result = datehelper.parseTime(time);
      break;
    case '/api/unixtime':
      console.log("unixifying the time! " + time);
      result = datehelper.unixifyTime(time);
      break;
    case '/api/gif':
      console.log('html test!');
      fs.readFile('./html/test.html',function (err, data) {
        if (err) {
          console.error(err);
        }

        res.writeHead(200, {
          'Content-Type': 'text/html',
          'Content-Length': data.length
        });

        res.write(data);
        res.end();
      });
      return;
    default:
      console.log('innacurate pathname');
  }

  if (result) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(result);
  } else {
    fs.readFile('./html/404.html',function (err, data) {

      res.writeHead(404, {
        'Content-Type': 'text/html',
        'Content-Length': data.length
      });

      res.write(data);
      res.end();
    });
  }

}).listen(port)

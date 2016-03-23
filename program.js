// Requires
var http = require('http');
var url = require('url');
var map = require('through2-map');
var datehelper = require('./modules/datehelper');

var port = process.argv[2];

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});

  var parsedURL = url.parse(req.url, true);
  if (parsedURL.pathname === '/api/parsetime') {
    res.write(datehelper.parseTime(parsedURL.query.iso));
    res.end();
  } else if (parsedURL.pathname === '/api/unixtime') {
    res.end(datehelper.unixifyTime(parsedURL.query.iso));
  } else {
    res.statusCode = 404;
    res.end();
  }

}).listen(port)


/*

official solution

var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
*/

// Requires
var http = require('http');
var url = require('url');
var map = require('through2-map');
var datehelper = require('./modules/datehelper');

var port = process.argv[2];

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
  }

  if (result) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(result);
  } else {
    res.writeHead(404);
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

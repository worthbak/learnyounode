var net = require('net');
var datehelper = require('./modules/datehelper.js');

var arguments = process.argv.splice(2);
var port = arguments[0];

var server = net.createServer(function(socket) {
  // write "2013-07-06 17:42" time format
  socket.write(datehelper.getCurrentFormattedDate() + "\n");

  socket.end();
});

server.listen(port);

/*
official solution

var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2])) 
*/

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static(__dirname));

server.listen(5323);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
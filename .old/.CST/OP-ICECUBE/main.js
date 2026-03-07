var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var dev = false

app.get('/', function(req, res){
  console.log(req.method, req.url)
  if (req.url == '/dev') {
    res.sendFile(__dirname + '/devView.html');
  } else {
    res.sendFile(__dirname + '/cameraClient.html');
  }
  dev = false
});

app.get('/dev', function(req, res){
  console.log(req.method, req.url)
    res.sendFile(__dirname + '/devView.html');
    dev = true
});


io.on('connection', function(socket){
  if (!dev) {
    io.emit('userConnect', socket.id);
  }
  
  socket.on('cameraTick', function(msg){
    io.emit('cameraTick', {id:socket.id, msg:msg});

      // console.log(socket.id, msg.motion);
  });

  socket.on('disconnect', function () {

    if (!dev) {
      io.emit('userDisconnect', socket.id);
    }

});
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
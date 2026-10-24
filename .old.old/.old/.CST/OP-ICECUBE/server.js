const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));


var userCount = 0;

io.on('connection', (socket) => {
  userCount++;
  io.emit('update count', userCount);
  console.log(userCount);
  // console.log('A user connected');
  socket.on('disconnect', (data) => {
    console.log('A user disconnected');
    console.log(data);
    io.emit('user left', 'A user');
    userCount--;
    console.log(userCount);
    io.emit('update count', userCount);

  });

  socket.on('userjoin', (username) => {
    console.log(username + ' joined');
    io.emit('user joined', username);
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

io.on('userjoin', (username) => {
  console.log(username + ' joined');
});

http.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});
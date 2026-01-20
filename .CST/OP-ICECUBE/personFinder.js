const express = require('express');
const socketio = require('socket.io');

const app = express();

const path = require('path');

const fetch = require('node-fetch');

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'personFinderClient.html'));
});

const server = app.listen(1337, () => {
    console.log('Server running on http://localhost:1337')
});

const io = socketio(server)

io.on('connection', (socket) => {
    console.log(`New connection: ${socket.id}`);

    socket.on('startSearch', function(data) {
        console.log('Starting search for:', socket.id, 'with data: ', data);

        var urls = [
            'https://scratch.mit.edu/users/',
            'https://instagram.com/',
            'https://chess.com/members/',
            'https://facebook.com/',
            'https://twitter.com/',
            'https://reddit.com/r/',
            'https://tiktok.com/@'
        ];

        urls.forEach(url => {fetch((url+data.username)).then(response => console.log(Object.entries(response)))})

        
    });

    
})


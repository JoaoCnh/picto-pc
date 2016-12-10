var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

// support json encoded bodies
app.use(bodyParser.json());

/*
 * GET: /connections
 * Returns all connected users as JSON
app.get('/connections', function (req, res) {
    var socketIdsArray = Object.keys(io.sockets.connected);

    var connectedSockets = _.map(socketIdsArray, function (socketId) {
        return io.sockets.connected[socketId].handshake.query.username;
    });

    res.json(connectedSockets);
});*/

app.use(require('./controllers'));

io.on('connection', function(socket) {
    var socketUser = socket.handshake.query.username;
    console.log(socketUser + ' connected');

    socket.on('disconnect', function() {
        console.log(socketUser + ' disconnected');
        socket.broadcast.emit('user left', socketUser);
    });

    socket.on('clear canvas', function () {
        socket.broadcast.emit('clear canvas');
    });

    socket.on('color update', function (color) {
        socket.broadcast.emit('color update', color);
    });

    socket.on('tool update', function (tool) {
        socket.broadcast.emit('tool update', tool);
    });

    socket.on('size update', function (size) {
        socket.broadcast.emit('size update', size);
    });

    socket.on('press', function(picto) {
        socket.broadcast.emit('press', picto);
    });

    socket.on('release', function(picto) {
        socket.broadcast.emit('release', picto);
    });

    socket.on('chat message', function (message) {
        socket.broadcast.emit('chat message', message);
    })

    socket.broadcast.emit('new user', socketUser);
});

http.listen(process.env.PORT || 8080, function() {
    console.log('===== Picto API is running =====');
});
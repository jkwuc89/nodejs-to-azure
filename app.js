var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Use port 3000 if PORT env var is not defined
var port = process.env.PORT || 3000;

/**
 * Using express to route requests to public directory
 */
app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.listen(port, function () {
    console.log('listening on ' + port);
});

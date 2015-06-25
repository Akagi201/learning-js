// Here is an example of a simple TCP server which listens on port 1337 and echoes whatever you send it:
// nc 127.0.0.1 1337 for test
var net = require('net');

var server = net.createServer(function (socket) {
    socket.write('Echo server\n');
    socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');

console.log('TCP Echo Server running at tcp://127.0.0.1:1337');

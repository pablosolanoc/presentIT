

function connect(socketIO){
    socketIO.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
            socketIO.emit('chat message', msg);
        });
    });
    return socketIO;
}

module.exports = connect;
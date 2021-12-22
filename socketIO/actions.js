var debug = require('debug')('PRESENTIT:socketIOActions');
var cookie = require('cookie');

function connect(socketIO){
    socketIO.on('connection', (socket) => {
        debug(socket.handshake.headers.cookie);
        debug('heyyyyyyyyy');
        debug(socket.handshake.query.room);
        socket.join(socket.handshake.query.room);

        socket.on('chat message', (msg) => {
            socketIO.emit('chat message', msg);
        });

        socket.on("updatePage", (page, fileId) => {
            debug('\nUpdating Page\n');
            socket.to(fileId).emit('updatePage', page);
        });
    });

    socketIO.use((socket, next) => {
        if(socket.handshake.headers.cookie){
            debug('Executing next');
            debug(cookie.parse(socket.handshake.headers.cookie))
            next();
        }else{
            debug('Executing else');
            next(new Error('Error no hay Cookie'))
        }
    });

    
    return socketIO;
}

module.exports = connect;
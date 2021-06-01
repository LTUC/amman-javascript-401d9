'use strict';

const io = require('socket.io-client');
const socketConnection = io.connect('http://localhost:3000/family');

socketConnection.emit('get_chores');

socketConnection.on('chore', payload => {
    console.log(`I have recieved the message: ${payload.chore}`);
    socketConnection.emit('recieved_chore', payload.id);
});

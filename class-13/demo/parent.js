'use strict';

const io = require('socket.io-client');
const socketConnection = io.connect('http://localhost:3000/family');

const chore = 'Clear your room >:(';

socketConnection.emit('new_chore', chore);

socketConnection.on('added_chore', () => {
    console.log('the chore was recieved from the hub');
});

'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3000/family');
const chores = ['water the flowers :D'];

chores.forEach(chore=> {
    socketConnection.emit('new_chore', chore);
});

socket.on('added', () => {
    console.log("Thank you !!")
    // socket.disconnect();
});

// created for testing only
socket.on('chore', (payload)=> {
    console.log("parent chore")
});
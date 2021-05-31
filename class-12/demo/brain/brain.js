'use strict';

const port = 3000;
const io = require('socket.io')(port);// http://localhost:3000
const healthSystem = io.of('/health-system');// http://localhost:3000/heath-system

io.on('connection', (socket) => {
    console.log('we are connected to the brain :)');

    socket.on('light', (payload) => {
        console.log('the light is recieved in the brain ***');
        io.emit('brightness', payload);
    });

    socket.on('smell', (payload) => {
        console.log('the smell is now in the brain!!!');
        io.emit('smell', payload);
    });
});

healthSystem.on('connection', (socket) => {
    console.log('We are connected to the heath system');

    socket.on('virus', (payload) => {
        healthSystem.emit('covid-19', payload);
    });
});
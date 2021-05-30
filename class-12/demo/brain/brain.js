'use strict';

const port = process.env.PORT || 3000;

const io = require('socket.io')(port);

const healthCareSystem = io.of('/health-care-system');

io.on('connection', (socket) => {
    console.log('connected to brain :)', socket.id);

    socket.on('light', (payload) => {
        console.log('light detected', payload);
        io.emit('brightness', payload);
    });

    socket.on('smell', (payload) => {
        console.log('smell detected', payload);
        io.emit('smell', payload);
    });
});

healthCareSystem.on('connection', (socket) => {
    console.log('health care connected!!!');
    socket.on('virus', (payload) => {
        healthCareSystem.emit('covid-19', payload);
    })

    socket.on('sugar', (payload) => {
        healthCareSystem.emit('high-sugar', payload);
    });
});
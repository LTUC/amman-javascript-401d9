'use strict';

const uuid = require('uuid').v4;
const io = require('socket.io')(3000);

const queue = {
    cores: {}
};

const family = io.of('./family');

family.on('connection', socket => {
    socket.on('new_chore', payload => {
        let id = uuid();
        queue.chores[id] = payload;
        socket.emit('added');
        family.emit('chore', { id, payload });
    });
});

socket.on('getall', () => {
    Object.keys(queue.chores).forEach(id => {
        socket.emit('chore', { id, payload: queue.chores[id] });
    })
})

socket.on('received', message => {
    delete queue.chores[message.id];
})
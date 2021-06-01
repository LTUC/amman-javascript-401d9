'use strict';

const io = require('socket.io')(3000);
const family = io.of('/family');// namespace
const uuid = require('uuid').v4;

const queue = {//message queue, will add any new chore, delete the cores once they are recieved.
    chores: {}// {id, chore}
}

family.on('connection', socket => {
    // listen to parent
    socket.on('new_chore', payload => {
        console.log('recieved a chore from parent to the hub');
        const id = uuid();// create an id for our tasks
        queue.chores[id] = payload;
        // return a feedback message, that the chore was sent successfully.
        socket.emit('added_chore');
        // send the chore to the child
        // this will emit the chore to the entire family (namespace).
        // so any connected children will receive the new added chores.
        family.emit('chore', { id: id, chore: payload });
    });

    socket.on('recieved_chore', (id) => {
        console.log('chore was handled by the child: ', id);
        delete queue.chores[id];
    });

    // we are listening to socket, so any new connection
    // will recieve chores without re-sending the chores to all the family (namespace)
    socket.on('get_chores', () => {
        Object.keys(queue.chores).forEach(id => {
            socket.emit('chore', { id, chore: queue.chores[id] });
        });
    });
});

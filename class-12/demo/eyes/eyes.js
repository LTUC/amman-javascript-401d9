'use strict';

const io = require('socket.io-client');

let host = "http://localhost:3000";

const brainConnection = io.connect(host);
brainConnection.on('brightness', handelBrightness);

function handelBrightness(payload) {
    if (payload.level >= 90) {
        console.log('close eyes');
    } else if (payload.level >= 50) {
        console.log('Squinting...');
    }
}
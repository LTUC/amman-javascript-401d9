'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000';

const connectionToBrain = io.connect(host);

connectionToBrain.on('brightness', handelBrightness);

function handelBrightness(payload) {
    if (payload.brightness >= 90) {
        console.log('close the eyes!!!');
    } else if (payload.brightness >= 70) {
        console.log('squinting the eyes!!!');
    } else {
        console.log('open the eyes!!!');
    }
}
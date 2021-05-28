'use strict';

const events = require('../../event-pool.js');

events.on('light', eyelid);
events.on('light', pupil);

function pupil(payload) {
    console.log('Eyes are dialted at', payload.brightness, '%');
}

function eyelid(payload) {
    if (payload.brightness >= 75) {
        console.log('eyes are squinting');
    }
}

setInterval(() => {
    let brightness = Math.ceil(Math.random() * 100);
    console.log('********************************');
    console.log('Brightness Detected:', brightness);
    console.log('--------------------------------');
    events.emit('light-detected', brightness);
    console.log('********************************');
}, 2000);

module.exports = { pupil, eyelid }

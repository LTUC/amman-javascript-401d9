// emit an event to the brain
// listen to the events from brain

'use strict';

const events = require('../../event-pool.js');

events.on('light', eyes);

function eyelid(payload) {
    if (payload.brightness >= 70) {
        console.log('eyes are closing!!!');
    } else if (payload.brightness >= 40) {
        console.log('eyes are squinting!!!');
    }
}

// this is the sun
setInterval(() => {
    let brightness = Math.ceil(Math.random() * 100);// 0 to 100
    console.log('*************************');
    console.log('brightness deticted: ', brightness);
    console.log('-------------------------');
    events.emit('light-detected', brightness);
    console.log('*************************');
}, 2000);// 2 seconds

module.exports = { eyelid }

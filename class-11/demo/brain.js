'use strict';

const events = require('./event-pool.js');


// require body parts
require('./body-parts/eyes/eyes.js');
require('./body-parts/arms/arms.js');

// brightness should be from 0 to 100%
events.on('light-detected', (payload) => {//on is for listening
    console.log('we are inside the brains');
    events.emit('light', { brightness: payload });
});

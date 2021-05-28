'use strict';

const events = require('./event-pool.js');

//body parts...
require('./body-parts/eyes/eyes.js');
require('./body-parts/arms/arms.js');


events.on('light-detected', (payload) => {
    events.emit('light', { brightness: payload })
});
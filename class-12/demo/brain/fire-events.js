// all the events should be fired from here.

'use strict';

const io = require('socket.io-client');
const brainHost = 'http://localhost:3000';

const connectionToBrain = io.connect(brainHost);

const connectionToHealthSystem = io.connect(`${brainHost}/health-system`);

// emit light events
connectionToBrain.emit('light', { brightness: 45 });
connectionToBrain.emit('light', { brightness: 75 });
connectionToBrain.emit('light', { brightness: 95 });

// emit smell events
connectionToBrain.emit('smell', { scent: 'flowers' });
connectionToBrain.emit('smell', { scent: 'bad milk' });

// emit namespace events (health care)
connectionToHealthSystem.emit('virus', { type: 'covid-19' });

'use strict';

const { Socket } = require('socket.io-client');
const io = require('socket.io-client');

let host = 'http://localhost:3000';

const brainConnection = io.connect(host);
const healthCareConnection = io.connect(`${host}/health-care-system`);

brainConnection.emit('light', { level: 45 });
brainConnection.emit('light', { level: 75 });
brainConnection.emit('light', { level: 95 });


brainConnection.emit('smell', { scent: 'flowers' });
brainConnection.emit('smell', { scent: 'bad milk' });

healthCareConnection.emit('virus', { type: 'covid-19' });
healthCareConnection.emit('sugar', { count: 90 });
healthCareConnection.emit('sugar', { count: 200 });

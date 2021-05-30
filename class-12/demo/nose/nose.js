'use strict';

const io = require('socket.io-client');

let host = 'http://localhost:3000';

const brainConnection = io.connect(host);
const healthCareConnection = io.connect(`${host}/health-care-system`);

// LISTENERS
brainConnection.on('smell', handleSmell);
healthCareConnection.on('covid-19', handleCovid);

// EVENT HANDLERS
function handleSmell(payload) {
    console.log(`I smell ${payload.scent}`);
}

function handleCovid(payload) {
    console.log(`Fighting off ${payload.type}`)
}
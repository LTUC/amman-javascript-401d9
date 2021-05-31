'use strict';

const io = require('socket.io-client');
const brainHost = 'http://localhost:3000';
const connectionToBrain = io.connect(brainHost);

const connectionToHealthSystem = io.connect(`${brainHost}/health-system`);

connectionToBrain.on('smell', smellHandler);
function smellHandler(payload) {
    console.log(`I smell ${payload.scent}`);
}

connectionToHealthSystem.on('covid-19', handelCovidVirus);
function handelCovidVirus(payload) {
    console.log(`Fighting off ${payload.type}`);
}

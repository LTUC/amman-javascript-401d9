'use strict';

const express = require('express');
const app = express();
const errorHandler = require('./error-handlers/500.js');
const notFoundHandler = require('./error-handlers/404.js');

app.get('/', (req, res) => {
    res.send("welcome to server.js");
});

app.get('/bad', (req, res) => {
    throw new Error('Something went wrong :(');
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => {
        console.log(`The app is up on ${port}`)
    });
}

module.exports = {
    app: app,
    start: start
}

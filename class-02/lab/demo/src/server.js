'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middlewares/Logger.js');

app.use(express.json());
app.use(logger);

//localhost:3000/car?model=Honda
app.get('/car', (req, res) => {
    const output = {
        model: req.query.model
    }
    res.json(output);
});

//localhost:3000/car/Honda
app.get('/car/:model', (req, res) => {
    const output = {
        model: req.params.model
    }
    res.json(output);
});

//POST
app.post('/car', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.put('/car/:car_id', (req, res) => {
    res.json(req.body);
});

function square(n) {
    return (req, res, next) => {
        if (typeof n !== 'number') {
            next('not a number >:(');// this will through an error
        } else {
            req.number = n * n;
            next();// this will go to the other middleware
        }
    };
}

//localhost:3000/middleware
app.get('/middleware', square('asdf'), (req, res) => {
    res.json({
        square: req.number
    });
});

app.use('*', notFoundHandler);
app.use(errorHandler);


function start(port) {
    app.listen(port, () => {
        console.log(`The server is up on ${port}`);
    });
}

module.exports = {
    server: app,
    start: start
}
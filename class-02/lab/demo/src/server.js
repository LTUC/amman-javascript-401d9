'use strict';

const express = require('express');
const app = express();
const errorHandler = require('./error-handlers/500.js');
const notFoundHandler = require('./error-handlers/404.js');
const logger = require('./middlewares/Logger.js');

app.use(express.json());
app.use(logger);

// query string localhost:3000/car?model=honda
app.get('/car', (req, res) => {
    const output = {
        carModel: req.query.model
    }
    res.json(output);
});

// without query string localhost:3000/car/model/honda
app.get('/car/:model', (req, res) => {
    const output = {
        carModel: req.params.model
    }
    res.json(output);
});

// post
app.post('/car', (req, res) => {
    res.json(req.body);
});

// put
app.put('/car/:car_id', (req, res) => {
    res.json(req.body);
});

// edit request with middleware
function square(n) {
    return (req, res, next) => {
        if (typeof n !== 'number') {
            next('not a number');
        } else {
            req.number = n * n;
            next();
        }
    };
}

// route specific middleware
app.get('/middleware', square('5'), (req, res) => {
    console.log(req.number);
    res.json({ square: req.number });
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
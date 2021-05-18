'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server.js');
// MONGOOSE_URI = mongodb://localhost:27017/people
mongoose
    .connect(process.env.MONGOOSE_URI,
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        server.start(process.env.PORT);
    })
    .catch((e) => {
        console.log('CONNECTION_ERROR', e.mssage);
    });

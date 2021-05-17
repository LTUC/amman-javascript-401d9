'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const notFoundHndler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const personRoutes = require('./routes/person.js');

app.use(express.json());//post, put, patch
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1/person', personRoutes);
app.use('*', notFoundHndler);
app.use(errorHandler);

module.exports = {
    server: app,
    start: (port) => {
        const PORT = port || 3000;
        app.listen(PORT, () => console.log(`the server is up on ${PORT}`));
    }
}

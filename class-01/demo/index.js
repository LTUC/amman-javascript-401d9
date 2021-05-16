const server = require('./server.js');
require('dotenv').config();
const port = process.env.PORT || 3000 ;

server.start(port);

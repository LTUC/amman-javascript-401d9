'use strict';
const events = require('../../event-pool.js');
const handlers = require('./arms-handlers');

events.on('light', handlers.coverEyes);

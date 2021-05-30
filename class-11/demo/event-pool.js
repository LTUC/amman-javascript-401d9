'use strict';
// this is a singleton for the events class
const Events = require('events');

const events = new Events();// only one instance created

module.exports = events;

'use strict';
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String }
});

const PersonModel = mongoose.model('Person', personSchema);

module.exports = PersonModel;

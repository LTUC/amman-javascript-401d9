'use strict';
const dynamoose = require('dynamoose');

const employeeScehma = new dynamoose.Schema({
    id: String,
    name: String,
    age: Number
});

module.exports = dynamoose.model('employee', employeeScehma);

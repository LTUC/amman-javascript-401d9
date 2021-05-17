'use strict';
const express = require('express');
const Person = require('../models/person.js');
const person = new Person();//object
const router = express.Router();

router.get('/', getPeople);
router.get('/:id', getPersonWithId);
router.post('/', createPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

// controller
function deletePerson(req, res) {
    const resObj = person.delete(req.params.id);
    res.json(resObj);
}

function updatePerson(req, res) {
    const personObj = req.body;
    const resObj = person.update(req.params.id, personObj);
    res.json(resObj);
}

function createPerson(req, res) {
    const personObj = req.body;
    const resObj = person.create(personObj);
    res.status(201).json(resObj);
}

function getPeople(req, res) {
    const resObj = person.read();
    res.json(resObj);
}

function getPersonWithId(req, res) {
    const resObj = person.read(req.params.id);
    res.json(resObj);
}

module.exports = router;
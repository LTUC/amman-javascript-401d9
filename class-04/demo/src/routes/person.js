'use strict';

const express = require('express');
const DataMngr = require('../models/dataMngr.js');
const PersonModel = require('../models/person.js');
const dataMngr = new DataMngr(PersonModel);
const router = express.Router();

router.get('/', getPeople);
router.get('/:id', getPersonWithId);
router.post('/', createPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

// controller
async function getPeople(req, res, next) {
    try {
        const resObj = await dataMngr.read();
        res.json(resObj);
    } catch (error) {
        next(error);
    }
}

async function getPersonWithId(req, res, next) {
    try {
        const resObj = await dataMngr.read(req.params.id);
        res.json(resObj);
    } catch (error) {
        next(error);
    }
}

async function createPerson(req, res, next) {
    try {
        const personObj = req.body;
        const resObj = await dataMngr.create(personObj);
        res.status(201).json(resObj);
    } catch (error) {
        next(error);
    }
}

async function updatePerson(req, res, next) {
    try {
        const personObj = req.body;
        const resObj = await dataMngr.update(req.params.id, personObj);
        res.json(resObj);
    } catch (error) {
        next(error);
    }
}

async function deletePerson(req, res, next) {
    try {
        const resObj = await dataMngr.delete(req.params.id);
        res.json(resObj);
    } catch (error) {
        next(error);
    }
}

module.exports = router;

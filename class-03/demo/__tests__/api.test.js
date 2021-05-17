'use strict';

const { server } = require('../src/server.js');
const superTest = require('supertest');
const request = superTest(server);

describe('api server', () => {
    let id;
    it('should create a new person using post request', async () => {
        //arrange
        let person = {
            name: 'Ahmad',
            role: 'student'
        }
        //act
        const response = await request.post('/api/v1/person').send(person);
        //assert
        expect(response.status).toEqual(201);
        expect(response.body.data.name).toEqual('Ahmad');
        expect(response.body.data.role).toEqual('student');
        expect(response.body.id.length).toBeGreaterThan(0);

        id = response.body.id;
    });

    it('should update a person using put request', async () => {
        //arrange
        let editPerson = {
            name: 'Ahmad',
            role: 'instructor'
        };
        //act
        const response = await request.put(`/api/v1/person/${id}`)
            .send(editPerson);
        //asert
        expect(response.status).toEqual(200);
        expect(response.body.data.role).toEqual('instructor');
    });
});

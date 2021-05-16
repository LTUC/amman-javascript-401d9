'use strict';
const server = require('../server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('server', () => {
    it('should get 404 status', async () => {
        const response = await request.get('/foo');
        expect(response.status).toBe(404);
    });

    it('should get a wecome message', async () => {
        //arrange
        let route = '/';
        //act
        const response = await request.get('/');
        //assert
        expect(response.status).toBe(200);
        expect(response.text).toBe('welcome to server.js');
    });

    it('should get an errore', async () => {
        const response = await request.get('/bad');
        expect(response.status).toEqual(500);
    });


});
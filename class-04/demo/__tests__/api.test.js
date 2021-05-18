'use strict';
const { server } = require('../src/server.js');
const superTest = require('supertest');
const request = superTest(server);
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGOOSE_TEST_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, async () => {// delete everything from db after tests
  await mongoose.connection.db.dropDatabase();
});

let id;
describe('api server', () => {
  afterAll(() => {// we need to close the connection after tests
    mongoose.connection.close();
  });

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
    expect(response.body.name).toEqual('Ahmad');
    expect(response.body.role).toEqual('student');
    expect(response.body._id.length).toBeGreaterThan(0);

    id = response.body._id;
  });

  it('should update a person using put request', async () => {
    //arrange
    let editPerson = {
      name: 'Ahmad',//unique
      role: 'instructor'
    };
    //act
    const response = await request.put(`/api/v1/person/${id}`)
      .send(editPerson);
    //asert
    expect(response.status).toEqual(200);
    expect(response.body.role).toEqual('instructor');
  });
});

'use strict';
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();
const basicAuth = require('./src/middleware/basic.js');
const bearerAuth = require('./src/middleware/bearer.js');
const User = require('./src/models/users.js');
const acl = require('./src/middleware/acl.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//signup
app.post('/signup', async (req, res, next) => {
  try {
    const user = new User(req.body);//username & password
    const savedUser = await user.save();

    res.status(201).json({
      user: savedUser,
      token: savedUser.token
    });
  } catch (error) {
    next(error.message);
  }
});

//signin
app.post('/signin', basicAuth, (req, res) => {
  res.status(200).json({
    user: req.user,
    token: req.user.token
  });
});

// get user
// read
app.get('/user', bearerAuth, acl('read'), (req, res) => {
  res.json({ user: req.user });
});

// create
app.post('/create', bearerAuth, acl('create'), (req, res) => {
  res.send('You can create something!!');
});

// update
app.put('/update', bearerAuth, acl('update'), (req, res) => {
  res.send('You can update something!!');
});

// delete
app.delete('/delete', bearerAuth, acl('delete'), (req, res) => {
  res.send('You can delete something!!');
});

mongoose
  .connect('mongodb://localhost:27017/auth', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log('Up'));
  })
  .catch((e) => console.log(e));

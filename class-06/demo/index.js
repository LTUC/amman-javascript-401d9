'use strict';
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// schema
const userScehma = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
// model
const User = mongoose.model('User', userScehma);

//signup
app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hash });
        const record = await user.save();
        res.status(201).json(record);
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
});

//signin
app.post('/signin', async (req, res) => {
    try {
        // Basic base64-encoded-strign
        console.log('authorization headers value ', req.headers.authorization);
        const encoded = req.headers.authorization.split(' ')[1];
        console.log('encoded', encoded);
        const decoded = base64.decode(encoded);
        console.log('decoded', decoded);

        const [username, password] = decoded.split(':');
        const user = await User.findOne({ username });
        const isValid = await bcrypt.compare(password, user.password);

        if (isValid) {
            res.json(user);
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

mongoose
    .connect('mongodb://localhost:27017/auth', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(3000, () => console.log('up and running'));
    })
    .catch((e) => console.error('CONNECTION ISSUE', e.message));

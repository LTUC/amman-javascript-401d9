'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = 'SOME-COMPLEX-RANDOMLLY-GNERATED-KEY';// this should be stored inside your environment variables.

const userSchema = new mongoose.Schema({
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true }
});

// let u = new user()
// let x = u.token;
// => username
userSchema.virtual('token').get(function () {
    return jwt.sign({ username: this.username, test: 'test' }, SECRET);
});

// user.save()
// mongoose hooks (middlewares)

// before saving if the password is modified
// hash the password
// then save to db
userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});

userSchema.statics.authenticateBasic =
    async function (username, password) {
        try {
            const user = await this.findOne({ username });
            const isValid =
                await bcrypt.compare(password, user.password);
            if (isValid) {
                return user;
            } else {
                throw new Error('Invalid user!!!');
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

userSchema.statics.authenticateBearer =
    async function (token) {
        try {
            const payload = jwt.verify(token, SECRET);
            console.log('payload', payload);

            const user = await this.findOne({
                username: payload.username
            });
            console.log('user', user);

            if (user) {
                return user;
            } else {
                throw new Error('invalid username from token');
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

module.exports = mongoose.model('User', userSchema);
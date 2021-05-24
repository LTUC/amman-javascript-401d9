'use strict';
const User = require('../models/users.js');

module.exports = async (req, res, next) => {
    if (!req.headers.authorization) {
        next('authorization header is not provided');
        return;
    }
    //Bearer token.string.l;kasdjf
    try {
        console.log('Auth header: ', req.headers.authorization);
        const token = req.headers.authorization
            .split(' ').pop();
        console.log('token: ', token);

        const user = await User.authenticateBearer(token);
        console.log('user', user);

        req.user = user;
        next();
    } catch (error) {
        next('Invalid token');
    }
}
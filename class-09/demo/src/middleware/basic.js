'use strict';

const base64 = require('base-64');
const User = require('../models/users.js');

module.exports = async (req, res, next) => {
    if (!req.headers.authorization) {
        next('authorization header is not provided');
        return;
    }
    try {
        const basic = req.headers.authorization
            .split(' ').pop();

        const [username, password] =
            base64.decode(basic).split(':');

        const authenticatedUser = await User.authenticateBasic(username, password);

        req.user = authenticatedUser;

        next();
    } catch (error) {
        next('Invalid Login');
    }
}
'use strict';
module.exports = (err, req, res, next) => {
    res.status(500).json({
        status: 500,
        message: err.message,
        route: req.path
    });
};

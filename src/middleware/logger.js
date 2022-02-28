'use strict';

function logger(req, res, next) {
    console.log('#INFO#', req.method, req.path);
    next();
}

module.exports = logger;
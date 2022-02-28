'use strict';

function validator(req, res, next) {
    let name = req.query.name;
    if (name) {
        next();
    } else {
        next('INVALID NAME!');
    }
}

module.exports = validator;
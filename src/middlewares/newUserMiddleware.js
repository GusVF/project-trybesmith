"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateName = function (req, res, next) {
    var username = req.body.username;
    if (typeof username !== 'string') {
        return res.status(422).json({ message: '"username" must be a string' });
    }
    if (username.length < 3) {
        return res.status(422)
            .json({ message: '"username" length must be at least 3 characters long' });
    }
    return next();
};
var validatePassword = function (req, res, next) {
    var password = req.body.password;
    if (typeof password !== 'string') {
        return res.status(422).json({ message: '"password" must be a string' });
    }
    if (password.length < 8) {
        return res.status(422)
            .json({ message: '"password" length must be at least 8 characters long' });
    }
    return next();
};
var validateLevel = function (req, res, next) {
    var level = req.body.level;
    if (level < 1) {
        console.log('Error: level should be greater than or equal to 1');
        return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
    }
    if (typeof level !== 'number') {
        return res.status(422).json({ message: '"level" must be a number' });
    }
    return next();
};
var validateVocation = function (req, res, next) {
    var vocation = req.body.vocation;
    if (typeof vocation !== 'string') {
        return res.status(422).json({ message: '"vocation" must be a string' });
    }
    if (vocation.length < 3) {
        return res.status(422)
            .json({ message: '"vocation" length must be at least 3 characters long' });
    }
    return next();
};
var newUserMiddleware = function (err, req, res, next) {
    validateName(req, res, function () {
        validatePassword(req, res, function () {
            validateLevel(req, res, function () {
                validateVocation(req, res, next);
            });
        });
    });
};
exports.default = newUserMiddleware;

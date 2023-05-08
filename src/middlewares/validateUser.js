"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateUser = function (err, _req, res, _next) {
    if (err instanceof Error && err.message === 'UNAUTHORIZED') {
        return res.status(401).json({ message: 'Username or password invalid' });
    }
    return res.status(500).json({ message: 'Internal error' });
};
exports.default = validateUser;

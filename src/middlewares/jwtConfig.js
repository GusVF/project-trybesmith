"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.secret = void 0;
exports.secret = 'trybe';
exports.config = {
    expiresIn: '630d',
    algorithm: 'HS256',
};
exports.default = {
    secret: exports.secret,
    config: exports.config,
};

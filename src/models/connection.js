"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promise_1 = require("mysql2/promise");
var connection = (0, promise_1.createPool)({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
});
exports.default = connection;

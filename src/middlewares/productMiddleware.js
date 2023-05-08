"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductMiddleware = function (_err, req, res, _next) {
    var _a = req.body, name = _a.name, amount = _a.amount;
    if (typeof name !== 'string') {
        return res.status(422).json({ message: '"name" must be a string' });
    }
    if (name.length < 3) {
        return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
    }
    if (typeof amount !== 'string') {
        return res.status(422).json({ message: '"amount" must be a string' });
    }
    if (amount.length < 3) {
        return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
    }
    // next();
};
exports.default = ProductMiddleware;

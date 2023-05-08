"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
// import orderModel from './models/order.model';
// import productModel from './models/product.model';
// import orderService from './services/order.service';
// async function Main(orderId: number[]) {
//   const user = await productModel.updateProduct(orderId);
//   console.log(user);
// }
// Main([3]);
var PORT = 3001;
var server = app_1.default.listen(PORT, function () { return console.log("Server is running on PORT: " + PORT); });
exports.default = server;

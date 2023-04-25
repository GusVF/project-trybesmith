import express from 'express';
import productController from './controllers/product.controller';
import userController from './controllers/user.controller';
import orderController from './controllers/order.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.createProductController);

app.get('/products', productController.findAllController);

app.post('/users', userController.newUserController);

app.get('/orders', orderController.findAllOrdersController);

export default app;
// starting the project

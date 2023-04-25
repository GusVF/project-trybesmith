import express from 'express';
import productController from './controllers/product.controller';
import userController from './controllers/user.controller';
import orderController from './controllers/order.controller';
import 'express-async-errors';
import validateUser from './middlewares/validateUser';

const app = express();

app.use(express.json());

app.post('/products', productController.createProductController);

app.get('/products', productController.findAllController);

app.post('/users', userController.newUserController);

app.get('/orders', orderController.findAllOrdersController);

app.post('/login', userController.loginController);

app.use(validateUser);

export default app;
// starting the project

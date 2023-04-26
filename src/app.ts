import express from 'express';
import productController from './controllers/product.controller';
import userController from './controllers/user.controller';
import orderController from './controllers/order.controller';
import 'express-async-errors';
import validateUser from './middlewares/validateUser';
import ProductMiddleware from './middlewares/productMiddleware';
import newUserMiddleware from './middlewares/newUserMiddleware';

const app = express();

app.use(express.json());

app.post('/products', productController.createProductController);
app.use(ProductMiddleware);

app.get('/products', productController.findAllController);

app.post('/users', userController.newUserController);
app.use(newUserMiddleware);

app.get('/orders', orderController.findAllOrdersController);

app.post('/login', userController.loginController);
app.use(validateUser);

export default app;

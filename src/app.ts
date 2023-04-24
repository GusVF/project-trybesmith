import express from 'express';
import productController from './controllers/product.controller';
import userController from './controllers/user.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.createProductController);
app.get('/products', productController.findAllController);
app.post('/users', userController.newUserController);

export default app;
// starting the project

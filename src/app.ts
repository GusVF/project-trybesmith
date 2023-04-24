import express from 'express';
import productController from './controllers/product.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.createProductController);

export default app;
// starting the project

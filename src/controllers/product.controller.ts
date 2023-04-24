import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProductController(req: Request, res: Response) {
  const { name, amount } = req.body;
  const newProduct = await productService.createProductService(req.body);
  if (!name || typeof name !== 'string') {
    return res.status(401).json({ message: 'Name field is missing' });
  }
  if (!amount || typeof amount !== 'string') {
    return res.status(401).json({ message: 'Amount field is missing' });
  }
  return res.status(201).json(newProduct);
}

async function findAllController(_req: Request, res: Response) {
  const products = await productService.findAllService();
  return res.status(200).json(products);
}

export default {
  createProductController,
  findAllController,
};
import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProductController(req: Request, res: Response) {
  const { name, amount } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }
  const newProduct = await productService.createProductService(req.body);
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
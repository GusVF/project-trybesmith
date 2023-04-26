import { NewProduct, Product } from '../Interfaces/products';
import productModel from '../models/product.model';

async function createProductService(product: NewProduct): Promise<Product> {
  const newProduct = await productModel.createProductModel(product);
  // if (product.name.length < 3 || typeof product.name !== 'string') {
  //   throw new Error('INVALID AMOUNT');
  // }
  // if (product.amount.length < 3 || typeof product.amount !== 'string') {
  //   throw new Error('INVALID NAME');
  // }
  return newProduct;
}

async function findAllService(): Promise<Product[]> {
  const products = await productModel.findAllModel();
  return products;
}

export default {
  createProductService,
  findAllService,
};
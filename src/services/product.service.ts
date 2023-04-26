import { NewProduct, Product } from '../Interfaces/products';
import productModel from '../models/product.model';

async function createProductService(product: NewProduct): Promise<Product> {
  const newProduct = await productModel.createProductModel(product);

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
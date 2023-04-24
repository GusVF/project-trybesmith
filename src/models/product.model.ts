import { ResultSetHeader } from 'mysql2';
import { NewProduct, Product } from '../Interfaces/products';
import connection from './connection';

async function createProductModel(product: NewProduct): Promise<Product> {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products(name, amount) VALUES(?,?)';
  const values = [name, amount];
  const [result] = await connection
    .execute<ResultSetHeader>(query, values);

  const { insertId: id } = result;
  const newProduct = { id, name, amount };

  return newProduct;
}

export default {
  createProductModel,
};
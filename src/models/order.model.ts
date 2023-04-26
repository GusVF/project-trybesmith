import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Order } from '../Interfaces/order';
// import { User } from '../Interfaces/user';
// import { Product } from '../Interfaces/products';

async function findAllOrdersModel(): Promise<Order[] | null> {
  const query = `SELECT O.id as 'id', O.user_id as 'userId', JSON_ARRAYAGG(P.id)
  AS productsIds 
  FROM Trybesmith.orders O
  INNER JOIN Trybesmith.products P ON O.ID = P.order_id
  GROUP BY O.id, O.user_id;`;
  const [rows] = await connection.execute(query);
  if (!rows) return null;
  return rows as Order[];
}
// funcoes para o requisito 8 ------------------>
async function userId(id: number): Promise<number | undefined> {
  const [rows] = await connection
    .execute<RowDataPacket[]>('SELECT id FROM Trybesmith.users WHERE id = ?', [id]);

  if (rows.length === 0) {
    return undefined;
  }
  const [user] = rows;
  return user.id;
}

async function productId(id: number): Promise<number | undefined> {
  const [rows] = await connection
    .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.products WHERE id = ?', [id]);
  if (rows.length === 0) {
    return undefined;
  }
  const [product] = rows;
  return product.id;
}

export default {
  findAllOrdersModel,
  userId,
  productId,
};
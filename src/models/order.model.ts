import connection from './connection';
import { Order } from '../Interfaces/order';

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

export default {
  findAllOrdersModel,
};
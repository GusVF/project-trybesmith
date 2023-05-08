import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Order } from '../Interfaces/order';

async function findAllOrdersModel(): Promise<Order[] | null> {
  const query = `SELECT O.id as 'id', O.user_id as 'userId', JSON_ARRAYAGG(P.id)
  AS productsIds 
  FROM Trybesmith.orders O
  INNER JOIN Trybesmith.products P ON O.ID = P.order_id
  GROUP BY O.id, O.user_id;`;
  const [rows] = await connection.execute<RowDataPacket[]>(query);
  if (!rows) return null;
  return rows as Order[];
}
// funcoes para o requisito 8 ------------------>
async function newOrderModel(userId: number | string): Promise<object> {
  const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const [rows] = await connection.execute<ResultSetHeader>(query, [userId]);
  const { insertId: id } = rows;
  const newOrder = { id, userId };
  return newOrder;
}

export default {
  findAllOrdersModel,
  newOrderModel,
};
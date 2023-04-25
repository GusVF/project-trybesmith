import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { User, NewUser } from '../Interfaces/user';

async function newUserModel(user: NewUser): Promise<User> {
  const { username, vocation, level, password } = user;

  const query = `INSERT INTO Trybesmith.users
  (username, vocation, level, password) VALUES(?, ?, ?, ?)`;

  const [result] = await connection
    .execute<ResultSetHeader>(query, [username, vocation, level, password]);
  const { insertId: id } = result;
  const newUser = { id, username, vocation, level, password };
  return newUser;
}

async function findByNameAndPassword(name: string, password: string): Promise<User | undefined> {
  const query = `SELECT username, password FROM Trybesmith.users
  WHERE username = ? AND password = ?`;
  const values = [name, password];
  const [rows] = await connection.execute<RowDataPacket[]>(query, values);
  const [user] = rows;
  return user as User | undefined;
}

export default {
  newUserModel,
  findByNameAndPassword,
};
import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User, NewUser } from '../Interfaces/user';

// async function getByEmail(email: string): Promise<User> {
//   const query = 'SELECT * FROM Trybesmith.users WHERE email = '
// }

async function newUserModel(user: NewUser): Promise<User> {
  const { username, vocation, level, password } = user;

  const query = `INSERT INTO Trybesmith.users
  (username, vocation, level, password) VALUES(?, ?, ?, ?)`;
  // const values = [username, vocation, level, password];

  const [result] = await connection
    .execute<ResultSetHeader>(query, [username, vocation, level, password]);
  const { insertId: id } = result;
  const newUser = { id, username, vocation, level, password };
  return newUser;
}

export default {
  newUserModel,
};
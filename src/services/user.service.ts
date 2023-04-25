import jwt from 'jsonwebtoken';
import { NewUser } from '../Interfaces/user';
import userModel from '../models/user.model';
import { secret, config } from '../middlewares/jwtConfig';
// import { LoginData } from '../Interfaces/login';

async function newUserService(user: NewUser) {
  const payload = await userModel.newUserModel(user);
  const token = jwt.sign({ payload }, secret, config);
  return token;
}

async function loginService(username: string, password: string): Promise<string> {
  const payload = await userModel.findByNameAndPassword(username, password);
  if (!payload || password !== payload.password) {
    throw new Error('UNAUTHORIZED');
  }
  const token = jwt.sign({ payload }, secret, config);
  return token;
}

export default {
  newUserService,
  loginService,
};
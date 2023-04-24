import jwt from 'jsonwebtoken';
import { NewUser } from '../Interfaces/user';
import userModel from '../models/user.model';
import { secret, config } from '../middlewares/jwtConfig';

async function newUserService(user: NewUser) {
  const payload = await userModel.newUserModel(user);
  const token = jwt.sign({ payload }, secret, config);
  return token;
}

export default {
  newUserService,
};
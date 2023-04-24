import { Request, Response } from 'express';
import userService from '../services/user.service';
import { NewUser } from '../Interfaces/user';

async function newUserController(req: Request, res: Response) {
  const user = req.body as NewUser;
  const newUser = await userService.newUserService(user);
  if (!newUser) {
    return res.status(401).json({ message: 'All fields are required' });
  }
  return res.status(201).json({ token: newUser });
}

export default {
  newUserController,
};
import { Request, Response } from 'express';
import userService from '../services/user.service';
import { NewUser } from '../Interfaces/user';

async function newUserController(req: Request, res: Response) {
  const user = req.body as NewUser;
  if (!user.username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!user.vocation) {
    return res.status(400).json({ message: '"vocation" is required' });
  }
  if (user.level === undefined) {
    return res.status(400).json({ message: '"level" is required' });
  }
  if (!user.password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  const newUser = await userService.newUserService(user);
  return res.status(201).json({ token: newUser });
}

async function loginController(req: Request, res: Response) {
  const { username, password } = req.body;
  if (!username || typeof username !== 'string') {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!password || typeof password !== 'string') {
    return res.status(400).json({ message: '"password" is required' });
  }
  const newUser = await userService.loginService(username, password);

  return res.status(200).json({ token: newUser });
}

export default {
  newUserController,
  loginController,
};
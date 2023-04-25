import { ErrorRequestHandler } from 'express';

const validateUser: ErrorRequestHandler = (err: unknown, _req, res, _next) => {
  if (err instanceof Error && err.message === 'UNAUTHORIZED') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  // const { username, password } = req.body;
  // if (!username || typeof username !== 'string') {
  //   return res.status(400).json({ message: '"username" is required' });
  // }
  // if (!password || typeof password !== 'string') {
  //   return res.status(400).json({ message: '"password" is required' });
  // }
  return res.status(500).json({ message: 'Internal error' });
};

export default validateUser;
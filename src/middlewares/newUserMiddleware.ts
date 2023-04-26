import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (typeof username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return res.status(422)
      .json({ message: '"username" length must be at least 3 characters long' });
  }
  return next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (typeof password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }
  return next();
};

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (level < 1) {
    console.log('Error: level should be greater than or equal to 1');
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
  }
  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }
  return next();
};

const validateVocation = (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;
  if (typeof vocation !== 'string') {
    return res.status(422).json({ message: '"vocation" must be a string' });
  }
  if (vocation.length < 3) {
    return res.status(422)
      .json({ message: '"vocation" length must be at least 3 characters long' });
  }
  return next();
};

const newUserMiddleware: ErrorRequestHandler = (err: unknown, req, res, next) => {
  validateName(req, res, () => {
    validatePassword(req, res, () => {
      validateLevel(req, res, () => {
        validateVocation(req, res, next);
      });
    });
  });
};

export default newUserMiddleware;
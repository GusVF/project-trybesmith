import { ErrorRequestHandler } from 'express';

const ProductMiddleware: ErrorRequestHandler = (_err: unknown, req, res, _next) => {
  const { name, amount } = req.body;
  if (typeof name !== 'string') {
    res.status(422).json({ message: '"name" must be a string' });
  }
  if (name.length < 3) {
    res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  if (typeof amount !== 'string') {
    res.status(422).json({ message: '"amount" must be a string' });
  }
  if (amount.length < 3) {
    res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  // next();
};
export default ProductMiddleware;
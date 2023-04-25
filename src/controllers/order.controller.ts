import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function findAllOrdersController(_req: Request, res: Response) {
  const orders = await orderService.findAllOrdersService();
  return res.status(200).json(orders);
}

export default {
  findAllOrdersController,
};
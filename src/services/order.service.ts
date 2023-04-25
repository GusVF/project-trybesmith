import { Order } from '../Interfaces/order';
import orderModel from '../models/order.model';

async function findAllOrdersService(): Promise<Order[] | null> {
  const orders = await orderModel.findAllOrdersModel();
  return orders;
}

export default {
  findAllOrdersService,
};

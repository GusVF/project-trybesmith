import app from './app';
// import orderModel from './models/order.model';
// import productModel from './models/product.model';
// import orderService from './services/order.service';

// async function Main(orderId: number[]) {
//   const user = await productModel.updateProduct(orderId);
//   console.log(user);
// }

// Main([3]);

const PORT = 3001;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;

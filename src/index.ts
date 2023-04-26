import app from './app';
// import orderModel from './models/order.model';

// async function Main(id: number) {
//   const user = await orderModel(id);
//   console.log(user);
// }

// Main(1);

const PORT = 3001;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;

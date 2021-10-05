/*
Open/closed principle:
A software artifact - such as a class or a component - should be open for extension but closed for modification.
*/
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { TenPercentDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'John',
  'Doe',
  '111.111.111-11',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer,
);
shoppingCart.addItem(new Product('T-Shirt', 58.99));
shoppingCart.addItem(new Product('Notebook', 20.99));
shoppingCart.addItem(new Product('Pen', 2.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

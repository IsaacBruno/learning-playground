type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your cart is empty.');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage('Your order was received.');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log('Message sent:', message);
  }

  saveOrder(): void {
    console.log('Order saved successfully.');
  }

  clear(): void {
    this._items.length = 0;
    console.log('Cart cleared successfully.');
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'T-Shirt', price: 58.99 });
shoppingCart.addItem({ name: 'Notebook', price: 20.99 });
shoppingCart.addItem({ name: 'Pen', price: 2.99 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);

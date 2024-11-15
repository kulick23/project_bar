import { makeAutoObservable } from "mobx";

class OrderStore {
  orders = [];

  constructor() {
    makeAutoObservable(this);
  }

  addOrder(coctail) {
    const existingOrder = this.orders.find(order => order.id === coctail.id);
    if (existingOrder) {
      existingOrder.quantity += 1;
    } else {
      this.orders.push({ ...coctail, quantity: 1 });
    }
  }

  removeOrder(id) {
    this.orders = this.orders.filter(order => order.id !== id);
  }

  increaseQuantity(id) {
    const order = this.orders.find(order => order.id === id);
    if (order) {
      order.quantity += 1;
    }
  }

  decreaseQuantity(id) {
    const order = this.orders.find(order => order.id === id);
    if (order && order.quantity > 1) {
      order.quantity -= 1;
    } else {
      this.removeOrder(id);
    }
  }

  clearOrders() {
    this.orders = [];
  }
}

const orderStore = new OrderStore();
export default orderStore;
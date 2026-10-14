import { findAllOrders, findOrderById } from "./orders-db.js";

// Task 1: Load all orders
export async function loadOrders() {
  return await findAllOrders();
}

// Task 2: Find orders from Cairo with paid status
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Cairo" && order.status === "paid"
  );
}

// Task 3: Find the highest single price
export function summarize(orders) {
  if (orders.length === 0) {
    return 0;
  }

  return Math.max(...orders.map((order) => order.price));
}

// Task 4: Describe an order or return a not-found message
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);

    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch {
    return `Could not find order ${id}`;
  }
}

// Task 5: Convert selected order fields to JSON
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({
      student: order.student,
      item: order.item,
    }))
  );
}
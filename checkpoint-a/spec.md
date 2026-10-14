import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Load all orders from the database
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Return orders from Cairo with paid status
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Cairo" && order.status === "paid"
  );
}

// 3. Find the highest single price, ignoring quantity
export function summarize(orders) {
  if (orders.length === 0) {
    return 0;
  }

  return Math.max(...orders.map((order) => order.price));
}

// 4. Describe an order, handling missing IDs
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);

    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch {
    return `Could not find order ${id}`;
  }
}

// 5. Keep only student and item, then convert to JSON
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({
      student: order.student,
      item: order.item,
    }))
  );
}
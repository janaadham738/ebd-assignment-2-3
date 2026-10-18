
import { items } from "./items.js";

/**
 * Displays the given items in the list.
 * Replaces the existing list each time.
 *
 * @param {Array} list
 */
export function renderItems(list) {
  const element = document.querySelector("#list");

  // Remove the previous items.
  element.innerHTML = "";

  // Create one list item for each product.
  list.forEach((item) => {
    const li = document.createElement("li");

    li.classList.add("stock-line");
    li.textContent = item.name;

    element.append(li);
  });
}

/**
 * Returns only products that are out of stock.
 *
 * @returns {Array}
 */
export function matching() {
  return items.filter((item) => item.inStock === false);
}

/**
 * Displays all products and connects the filter button.
 */
export function start() {
  // Display all products when the page loads.
  renderItems(items);

  // Show only out-of-stock products when clicked.
  document.querySelector("#apply").addEventListener("click", () => {
    renderItems(matching());
  });
}



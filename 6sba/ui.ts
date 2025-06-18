// src/ui.ts
import { Product } from "./models/Product";
import { fetchProducts } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";

async function renderProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;

  try {
    const data = await fetchProducts();
    const products = data.slice(0, 5);

    products.forEach((p) => {
      const product = new Product(p.id, p.title, p.price, p.category, p.discountPercentage);
      const discount = calculateDiscount(product.price, product.discountPercentage);
      const tax = calculateTax(product.getPriceWithDiscount(), product.category);
      const finalPrice = product.getPriceWithDiscount() + tax;

      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <h2>${product.title}</h2>
        <p class="price">Original Price: $${product.price.toFixed(2)}</p>
        <p>Discount: -$${discount.toFixed(2)} (${product.discountPercentage}%)</p>
        <p>Tax: +$${tax.toFixed(2)}</p>
        <p><strong>Final Price: $${finalPrice.toFixed(2)}</strong></p>
      `;
      container.appendChild(div);
    });
  } catch (err) {
    container.innerHTML = `<p>Failed to load products. ${err}</p>`;
  }
}

renderProducts();
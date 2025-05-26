// src/main.ts
import PhysicalProduct from './models/PhysicalProduct';
import DigitalProduct from 'lab1 mod6/PhysicalProduct.ts';
import { calculateTax } from './utils/taxCalculator';

const products = [
  new PhysicalProduct('001', 'Laptop', 1200, 2.5),
  new DigitalProduct('002', 'E-Book', 15, 50)
];

for (const product of products) {
  console.log(product.displayDetails());
  console.log(`Price with tax: $${calculateTax(product).toFixed(2)}`);
}

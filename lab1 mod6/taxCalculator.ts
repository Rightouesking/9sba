// src/utils/taxCalculator.ts
import Product from lab1 mod6

export function calculateTax(product: Product): number {
  return product.getPriceWithTax();
}
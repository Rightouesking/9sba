// src/utils/taxCalculator.ts
export function calculateTax(price: number, category: string): number {
  const taxRate = category === "groceries" ? 0.03 : 0.0475;
  return price * taxRate;
}


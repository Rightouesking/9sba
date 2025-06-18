// src/utils/discountCalculator.ts
export function calculateDiscount(price: number, discountPercentage: number): number {
  return (price * discountPercentage) / 100;
}
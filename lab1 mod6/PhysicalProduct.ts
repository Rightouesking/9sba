// src/models/PhysicalProduct.ts
import Product from './Product';

export default class PhysicalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private weight: number
  ) {
    super(sku, name, price);
  }

  getPriceWithTax(): number {
    return this.price * 1.1;
  }

  get formattedWeight(): string {
    return `${this.weight} kg`;
  }
}
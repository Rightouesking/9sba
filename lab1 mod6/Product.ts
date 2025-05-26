// src/models/Product.ts
export default class Product {
  constructor(
    public sku: string,
    public name: string,
    public price: number
  ) {}

  displayDetails(): string {
    return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
  }

  getPriceWithTax(): number {
    return this.price; // Base class — override in subclasses
  }
}
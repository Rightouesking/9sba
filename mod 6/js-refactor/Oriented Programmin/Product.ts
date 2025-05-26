export abstract class Product {
  constructor(
    protected sku: string,
    protected name: string,
    protected price: number
  ) {}

  abstract getPriceWithTax(): number;

  displayDetails(): string {
    return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
  }

  getPrice(): number {
    return this.price;
  }
}
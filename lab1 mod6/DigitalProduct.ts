// src/models/DigitalProduct.ts
import Product from './Product';

export default class DigitalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private fileSize: number
  ) {
    super(sku, name, price);
  }

  getPriceWithTax(): number {
    return this.price;
  }

  get formattedFileSize(): string {
    return `${this.fileSize} MB`;
  }
}
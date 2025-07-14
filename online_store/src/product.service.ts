import { Injectable, NotFoundException } from '@nestjs/common';
import { PRODUCTS_DATA } from './constants/products_data';
import { ICreateProduct } from './products.controller';

@Injectable()
export class ProductsService {
  public products = PRODUCTS_DATA;

  constructor() { }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((e) => e.id === id);
    if (!product) {
      throw new NotFoundException('Product with such id was not found !');
    }
    return product
  }

  delete(id: number) {
    const productIndex = this.products.findIndex((e) => e.id === id);
    if (productIndex === -1) {
      throw new NotFoundException('Product with such id was not found !');
    }
    this.products.splice(productIndex, 1);
  }

  create(product: any) {
    const newId = Math.max(...this.products.map((p) => p.id)) + 1;
    const newProduct = { id: newId, ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, updates: Partial<ICreateProduct>) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException('Product with such id was not found!');
    }
    Object.assign(product, updates);
    return product;
  }
}


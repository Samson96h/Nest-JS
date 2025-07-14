import { BadRequestException, Controller, Delete, Get, Param, Body, Post, Patch } from '@nestjs/common';

import { ProductsService } from './product.service';

export interface IProductParam {
  id: string;
}

export interface ICreateProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  in_stock: boolean;
}

export interface IUpdateProduct {
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  in_stock?: boolean;
}


@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  @Get()
  public findAll() {
    return this.productsService.findAll();
  }

  @Delete(':id')
  public delete(@Param() params: IProductParam) {
    if (isNaN(Number(params.id))) {
      throw new BadRequestException('Id must be a number');
    }
    this.productsService.delete(Number(params.id));
    return;
  }

  @Get(':id')
  public findOne(@Param() params: IProductParam) {
    if (isNaN(Number(params.id))) {
      throw new BadRequestException('Id must be a number');
    }
    return this.productsService.findOne(Number(params.id));
  }

  @Post()
  public create(@Body() body: ICreateProduct) {
    return this.productsService.create(body);
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() body: IUpdateProduct) {
    if (isNaN(Number(id))) {
      throw new BadRequestException('Id must be a number');
    }
    return this.productsService.update(Number(id), body);
  }

}
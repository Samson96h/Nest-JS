import { Body, Controller, Post, Get, Patch, Delete, Param, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductsDTO, ProductUpdateDTO } from './dto/products.dto'

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    getAll() {
        return this.productsService.findAll()
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.findOne(id)
    }

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    create(@Body() dto: ProductsDTO) {
        return this.productsService.create(dto)
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ skipMissingProperties: true, whitelist: true }))
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: ProductUpdateDTO) {
        return this.productsService.update(id, dto)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        this.productsService.delete(id)
        return { message: 'Product deleted successfully' }
    }
}
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './product.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}


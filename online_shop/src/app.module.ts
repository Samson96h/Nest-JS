import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './resources/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entityes/user.entity';
import { ProductsModule } from './resources/products/products.module';
import { Product } from './entityes/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5555,
      username: 'online_shop_db_user',
      password: 'DsmEntIcKlADaDIaMWor',
      database: 'online_shop_db',
      entities: [User, Product],
      synchronize: true,
    }),
    AuthModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
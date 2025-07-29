import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './resources/auth/auth.module';
import { ProductsModule } from './resources/products/products.module';
import { UsersModule } from './resources/users/users.module';

@Module({
  imports: [AuthModule,ProductsModule,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
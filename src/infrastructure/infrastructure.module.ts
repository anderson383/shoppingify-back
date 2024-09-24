import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataBaseConfigFactory } from './config/data-base.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './modules/shop/product/product.module';
import { CategoryModule } from './modules/config/category/category.module';
import { ShoppingCarModule } from './modules/shop/shopping-car/shopping-car.module';
import { ProductShopppingCarModule } from './modules/shop/product-shopping-car/product-shoppping-car.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: dataBaseConfigFactory,
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `env/${process.env.NODE_ENV}.env`,
    }),
    AuthModule,
    ProductModule,
    CategoryModule,
    ShoppingCarModule,
    ProductShopppingCarModule,
  ],
})
export class InfrastructureModule {}

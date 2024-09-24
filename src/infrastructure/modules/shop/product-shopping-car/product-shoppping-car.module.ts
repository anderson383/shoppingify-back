import { Module } from '@nestjs/common';
import { ProductShoppingCarController } from './controllers/product-shopping-car.controller';
import { ShoppingCarModule } from '../shopping-car/shopping-car.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductShoppingCarEntity } from './entity/ProductShoppingCar.entity';
import { ServiceProductShoppingCar } from 'src/domain/ports/shop/repository/service-product-shopping-car';
import { RepositoryProductShoppingCar } from 'src/domain/ports/shop/repository/repository-product-shopping-car';
import { ServiceCreateProductShoppingCarProvider } from './service/service-create-product-shopping-car-provider';
import { RepositoryProductShoppingCarPosgresql } from './adapter/repository/repository-product-shopping-car';
import { CreateProductShoppingCarHandler } from 'src/aplication/commanders/shop/create-product-shopping-car.handler';

@Module({
  imports: [
    ShoppingCarModule,
    TypeOrmModule.forFeature([ProductShoppingCarEntity]),
  ],
  controllers: [ProductShoppingCarController],
  providers: [
    {
      provide: ServiceProductShoppingCar,
      inject: [RepositoryProductShoppingCar],
      useFactory: ServiceCreateProductShoppingCarProvider,
    },
    {
      provide: RepositoryProductShoppingCar,
      useClass: RepositoryProductShoppingCarPosgresql,
    },
    CreateProductShoppingCarHandler,
  ],
  exports: [
    ServiceProductShoppingCar,
    CreateProductShoppingCarHandler,
    RepositoryProductShoppingCar,
  ],
})
export class ProductShopppingCarModule {}

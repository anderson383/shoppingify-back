import {Module} from "@nestjs/common";
import {CreateProductShoppingCarHandler} from "../../../aplication/product-shopping-car/comander/create-product-shopping-car.handler";
import {RepositoryProductShoppingCar} from "../../../domain/product-shopping-car/port/repository/repository-product-shopping-car";
import {ServiceProductShoppingCar} from "../../../domain/product-shopping-car/service/service-product-shopping-car";
import {ServiceCreateProductShoppingCarProvider} from "./service/service-create-product-shopping-car-provider";
import {RepositoryProductShoppingCarPosgresql} from "../adapter/repository/repository-product-shopping-car";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductShoppingCarEntity} from "../entity/ProductShoppingCar.entity";
import {ShoppingCarModule} from "../../shopping-car/shopping-car.module";


@Module({
  imports: [
    ShoppingCarModule,
    TypeOrmModule.forFeature([ProductShoppingCarEntity])
  ],
  providers: [
    { provide: ServiceProductShoppingCar, inject: [RepositoryProductShoppingCar], useFactory: ServiceCreateProductShoppingCarProvider },
    { provide: RepositoryProductShoppingCar, useClass: RepositoryProductShoppingCarPosgresql },
    CreateProductShoppingCarHandler
  ],
  exports: [
    ServiceProductShoppingCar,
    CreateProductShoppingCarHandler,
    RepositoryProductShoppingCar
  ]
})
export class ProductShoppingCarProviderModule { }
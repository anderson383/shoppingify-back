import { Injectable } from '@nestjs/common';
import { ProductShoppingCarCreateDto } from 'src/aplication/commanders/dtos/product-shopping-car-create.dto';
import {
  ProductShoppingCar,
  ShoppingCar,
} from 'src/domain/models/ProductShoppingCar';
import { ServiceProductShoppingCar } from 'src/domain/ports/shop/repository/service-product-shopping-car';

@Injectable()
export class CreateProductShoppingCarHandler {
  constructor(private _serviceProductShoppingCar: ServiceProductShoppingCar) {}

  async execute(productShoppingCar: ProductShoppingCarCreateDto) {
    return this._serviceProductShoppingCar.execute(
      new ShoppingCar(
        productShoppingCar.name,
        productShoppingCar.products.map(
          (product) => new ProductShoppingCar(product.pcx, product.product),
        ),
      ),
    );
  }
}

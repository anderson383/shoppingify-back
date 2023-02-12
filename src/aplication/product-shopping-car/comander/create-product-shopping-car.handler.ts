import {Injectable} from "@nestjs/common";
import {ProductShoppingCar, ShoppingCar} from "../../../domain/product-shopping-car/model/ProductShoppingCar";
import {ServiceProductShoppingCar} from "../../../domain/product-shopping-car/service/service-product-shopping-car";
import {ProductShoppingCarCreateDto} from "./dto/product-shopping-car-create.dto";

@Injectable()
export class CreateProductShoppingCarHandler {

  constructor(private _serviceProductShoppingCar: ServiceProductShoppingCar) {
  }

  async execute (productShoppingCar: ProductShoppingCarCreateDto) {
    return this._serviceProductShoppingCar.execute(new ShoppingCar(
      productShoppingCar.name,
      productShoppingCar.products.map(product => new ProductShoppingCar(product.pcx, product.product))
    ))
  }
}
import { RepositoryProductShoppingCar } from '../port/repository/repository-product-shopping-car';
import { ShoppingCar } from '../model/ProductShoppingCar';

export class ServiceProductShoppingCar {
  constructor(
    private readonly _repositoryProductShoppingCar: RepositoryProductShoppingCar,
  ) {}

  async execute(prductoShoppingCar: ShoppingCar) {
    await this._repositoryProductShoppingCar.save(prductoShoppingCar);
  }
}

import { ShoppingCar } from 'src/domain/models/ProductShoppingCar';
import { RepositoryProductShoppingCar } from 'src/domain/ports/shop/repository/repository-product-shopping-car';
export class ServiceProductShoppingCar {
  constructor(
    private readonly _repositoryProductShoppingCar: RepositoryProductShoppingCar,
  ) {}

  async execute(prductoShoppingCar: ShoppingCar) {
    await this._repositoryProductShoppingCar.save(prductoShoppingCar);
  }
}

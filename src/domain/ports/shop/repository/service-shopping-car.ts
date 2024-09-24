import { RepositoryShoppingCar } from 'src/domain/ports/shop/repository/repository-shopping-car';

export class ServiceShoppingCar {
  constructor(private _shoppingCar: RepositoryShoppingCar) {}

  async saveShoppingCar() {
  }
}

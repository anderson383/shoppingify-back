import { ShoppingCar } from 'src/domain/models/ProductShoppingCar';

export abstract class RepositoryProductShoppingCar {
  abstract save(productShoppingCar: ShoppingCar);
}

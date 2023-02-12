import {ProductShoppingCar, ShoppingCar} from "../../model/ProductShoppingCar";


export abstract class RepositoryProductShoppingCar {
  abstract save(productShoppingCar: ShoppingCar)
}
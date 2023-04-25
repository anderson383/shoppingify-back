import { ShoppingCarHistory } from '../model/ShoppingCarHistory';

export abstract class DaoShoppingCar {
  abstract listHistoryShoppingCar(): Promise<ShoppingCarHistory[]>;
}

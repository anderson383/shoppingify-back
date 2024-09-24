import { ShoppingCarHistory } from 'src/domain/models/ShoppingCarHistory';

export abstract class DaoShoppingCar {
  abstract listHistoryShoppingCar(): Promise<ShoppingCarHistory[]>;
}

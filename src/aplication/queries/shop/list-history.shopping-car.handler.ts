import { Injectable } from '@nestjs/common';
import { ShoppingCarHistory } from 'src/domain/models/ShoppingCarHistory';
import { DaoShoppingCar } from 'src/domain/ports/shop/dao/dao-shopping-car';

@Injectable()
export class ListHistoryShoppingCarHandler {
  constructor(private readonly _daoShoppingCar: DaoShoppingCar) {}

  async execute(): Promise<ShoppingCarHistory[]> {
    return this._daoShoppingCar.listHistoryShoppingCar();
  }
}

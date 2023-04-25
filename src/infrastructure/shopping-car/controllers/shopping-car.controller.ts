import { Controller, Get } from '@nestjs/common';
import { ShoppingCarHistory } from '../../../domain/shopping-car/model/ShoppingCarHistory';
import { ListHistoryShoppingCarHandler } from '../../../aplication/shopping-car/consult/list-history.shopping-car.handler';

@Controller('/shopping-car')
export class ShoppingCarController {
  constructor(
    private readonly _listHistoryShoppingCarHandler: ListHistoryShoppingCarHandler,
  ) {}

  @Get('/history')
  async getShoppingCarHistory(): Promise<ShoppingCarHistory[]> {
    return this._listHistoryShoppingCarHandler.execute();
  }
}

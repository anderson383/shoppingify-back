import { Controller, Get, UseGuards } from '@nestjs/common';
import { ListHistoryShoppingCarHandler } from 'src/aplication/queries/shop/list-history.shopping-car.handler';
import { ShoppingCarHistory } from 'src/domain/models/ShoppingCarHistory';
import { AuthGuard } from 'src/infrastructure/modules/auth/guards/auth.guard';

@Controller('/shopping-car')
@UseGuards(AuthGuard)
export class ShoppingCarController {
  constructor(
    private readonly _listHistoryShoppingCarHandler: ListHistoryShoppingCarHandler,
  ) {}

  @Get('/history')
  async getShoppingCarHistory(): Promise<ShoppingCarHistory[]> {
    return this._listHistoryShoppingCarHandler.execute();
  }
}

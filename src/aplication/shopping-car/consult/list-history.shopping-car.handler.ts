import {Injectable} from "@nestjs/common";
import {ShoppingCarHistory} from "../../../domain/shopping-car/model/ShoppingCarHistory";
import {DaoShoppingCar} from "../../../domain/shopping-car/dao/dao-shopping-car";

@Injectable()
export class ListHistoryShoppingCarHandler {

  constructor(
    private readonly _daoShoppingCar: DaoShoppingCar
  ) {
  }

  async execute () :Promise<ShoppingCarHistory[]> {
    return this._daoShoppingCar.listHistoryShoppingCar()
  }
}
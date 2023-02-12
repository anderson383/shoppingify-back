import {DaoShoppingCar} from "../../../../domain/shopping-car/dao/dao-shopping-car";
import {ShoppingCarHistory} from "../../../../domain/shopping-car/model/ShoppingCarHistory";
import {InjectEntityManager} from "@nestjs/typeorm";
import {createQueryBuilder, EntityManager} from "typeorm";
import {Injectable} from "@nestjs/common";

@Injectable()
export class DaoShoppingCarPostgresql implements DaoShoppingCar {

  constructor(
    @InjectEntityManager() entityManager: EntityManager
  ) {
  }

  async listHistoryShoppingCar(): Promise<ShoppingCarHistory[]> {
    try {
      const convertDate = (date:any) => date.toISOString().substring(0, 10)
      const filtered = (data: Array<any>) => {
        let dataFiltered:Array<any> = []
        data.forEach(shoppingCar => {
          let find = dataFiltered.find(item => (item.date === convertDate(shoppingCar.datehistory)))
          if (find) find['shopping_car'] = [...find['shopping_car'], shoppingCar]
          else dataFiltered.push({ date: convertDate(shoppingCar.datehistory), shopping_car: [shoppingCar]})
        });
        return dataFiltered
      }
      const query = createQueryBuilder<ShoppingCarHistory>('ShoppingCar', 'sp')
        .select(
          [
            'id',
            "date_trunc('month', create_date) as dateHistory",
            'create_date',
            "name",
            "status"
          ],
        )
      return filtered(await query.getRawMany())
    } catch (e) {
      throw new Error(e)
    }
  }
}
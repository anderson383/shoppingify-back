import { createQueryBuilder, EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { DaoShoppingCar } from 'src/domain/ports/shop/dao/dao-shopping-car';

@Injectable()
export class DaoShoppingCarPostgresql implements DaoShoppingCar {
  async listHistoryShoppingCar(): Promise<any> {
    try {
      const filtered = (data: Array<any>) => {
        const groupedItems = data.reduce((accumulator, current) => {
          const key = current.fecha_formato.replace(/\s+/g, ' ');
          accumulator[key] = accumulator[key] || [];
          accumulator[key].push(current);
          return accumulator;
        }, {});

        const listKeys = Object.keys(groupedItems);
        return listKeys.map((item) => ({
          date: item,
          history_list: groupedItems[item],
        }));
      };

      const query = createQueryBuilder('ShoppingCar', 'sp')
        .select([
          `TO_CHAR(sp.create_date, 'Month YYYY') as fecha_formato`,
          'sp."id"',
          'sp."name"',
          'sp."status"',
          `TO_CHAR(sp.create_date, 'Day dd.mm.YYYY') as datehistory`,
        ])
        .groupBy('sp.create_date, sp.id');
      const response = await query.getRawMany()
      return filtered(response);
    } catch (e) {
      throw new Error(e);
    }
  }
}

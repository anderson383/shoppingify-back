import { ShoppingCar } from 'src/domain/models/ProductShoppingCar';
import { QueryRunner } from 'typeorm';
import { InsertResult } from 'typeorm/query-builder/result/InsertResult';

export abstract class RepositoryShoppingCar {
  abstract saveShoppingCar(
    shoppingCar: ShoppingCar,
    queryRunner?: QueryRunner,
  ): Promise<InsertResult>;
}

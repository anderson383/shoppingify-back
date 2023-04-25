import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, QueryRunner } from 'typeorm';
import { ShoppingCar } from '../../../../domain/product-shopping-car/model/ProductShoppingCar';
import { ShoppingCarEntity } from '../../entity/ShoppingCar.entity';
import { RepositoryShoppingCar } from '../../../../domain/shopping-car/port/repository/repository-shopping-car';
import { Injectable } from '@nestjs/common';
import { InsertResult } from 'typeorm/query-builder/result/InsertResult';

@Injectable()
export class RepositoryShoppingCarPostgresql implements RepositoryShoppingCar {
  constructor(
    @InjectEntityManager() public readonly entityManager: EntityManager,
  ) {}

  async saveShoppingCar(
    shoppingCar: ShoppingCar,
    queryRunner: QueryRunner,
  ): Promise<InsertResult> {
    return await this.entityManager
      .createQueryBuilder(queryRunner)
      .insert()
      .into(ShoppingCarEntity)
      .values({
        name: shoppingCar.name,
        status: 'ACTIVE',
      })
      .execute();
  }
}

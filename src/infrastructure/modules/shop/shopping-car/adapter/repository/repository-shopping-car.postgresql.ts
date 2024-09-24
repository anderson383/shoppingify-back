import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, QueryRunner } from 'typeorm';
import { ShoppingCarEntity } from '../../entity/ShoppingCar.entity';
import { Injectable } from '@nestjs/common';
import { InsertResult } from 'typeorm/query-builder/result/InsertResult';
import { RepositoryShoppingCar } from 'src/domain/ports/shop/repository/repository-shopping-car';
import { ShoppingCar } from 'src/domain/models/ProductShoppingCar';

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

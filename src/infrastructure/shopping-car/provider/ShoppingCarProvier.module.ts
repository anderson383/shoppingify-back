import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCarEntity } from '../entity/ShoppingCar.entity';
import { RepositoryShoppingCar } from '../../../domain/shopping-car/port/repository/repository-shopping-car';
import { RepositoryShoppingCarPostgresql } from '../adapter/repository/repository-shopping-car.postgresql';
import { DaoShoppingCar } from '../../../domain/shopping-car/dao/dao-shopping-car';
import { DaoShoppingCarPostgresql } from '../adapter/dao/dao-shopping-car.postgresql';
import { ListHistoryShoppingCarHandler } from '../../../aplication/shopping-car/consult/list-history.shopping-car.handler';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingCarEntity])],

  providers: [
    ListHistoryShoppingCarHandler,
    {
      provide: RepositoryShoppingCar,
      useClass: RepositoryShoppingCarPostgresql,
    },
    { provide: DaoShoppingCar, useClass: DaoShoppingCarPostgresql },
  ],
  exports: [
    ListHistoryShoppingCarHandler,
    DaoShoppingCar,
    RepositoryShoppingCar,
  ],
})
export class ShoppingCarProvierModule {}

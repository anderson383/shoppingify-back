import { Module } from '@nestjs/common';
import { ShoppingCarController } from './controllers/shopping-car.controller';
import { ListHistoryShoppingCarHandler } from 'src/aplication/queries/shop/list-history.shopping-car.handler';
import { DaoShoppingCar } from 'src/domain/ports/shop/dao/dao-shopping-car';
import { RepositoryShoppingCar } from 'src/domain/ports/shop/repository/repository-shopping-car';
import { DaoShoppingCarPostgresql } from './adapter/dao/dao-shopping-car.postgresql';
import { RepositoryShoppingCarPostgresql } from './adapter/repository/repository-shopping-car.postgresql';
import { ShoppingCarEntity } from './entity/ShoppingCar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingCarEntity])],
  controllers: [ShoppingCarController],
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
export class ShoppingCarModule {}

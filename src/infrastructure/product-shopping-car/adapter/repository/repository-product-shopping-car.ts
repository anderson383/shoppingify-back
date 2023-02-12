import {RepositoryProductShoppingCar} from "../../../../domain/product-shopping-car/port/repository/repository-product-shopping-car";
import {ProductShoppingCar, ShoppingCar} from "../../../../domain/product-shopping-car/model/ProductShoppingCar";
import {InjectConnection, InjectEntityManager, InjectRepository} from "@nestjs/typeorm";
import {ProductShoppingCarEntity} from "../../entity/ProductShoppingCar.entity";
import {Connection, EntityManager, QueryRunner, Repository} from "typeorm";
import {ShoppingCarEntity} from "../../../shopping-car/entity/ShoppingCar.entity";
import {RepositoryShoppingCar} from "../../../../domain/shopping-car/port/repository/repository-shopping-car";
import {ShoppingCarModule} from "../../../shopping-car/shopping-car.module";
import {Inject} from "@nestjs/common";
import {RepositoryShoppingCarPostgresql} from "../../../shopping-car/adapter/repository/repository-shopping-car.postgresql";


export class RepositoryProductShoppingCarPosgresql implements RepositoryProductShoppingCar{

  constructor(
    private readonly repositoryShoppingCar: RepositoryShoppingCar,
    @InjectConnection() private readonly connection: Connection,
    @InjectEntityManager() private readonly entityManager: EntityManager,
    @InjectRepository(ProductShoppingCarEntity) private repository: Repository<ProductShoppingCarEntity>
  ) {
  }


  async save(productShoppingCar: ShoppingCar) {
    const queryRunner = this.connection.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()
    try {
      const {identifiers: [shoppingId]} = await this.repositoryShoppingCar.saveShoppingCar(productShoppingCar, queryRunner)
      await this.saveProductShoppingCarMany(String(shoppingId.id), productShoppingCar.products, queryRunner)
      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction()
    } finally {
      await queryRunner.release()
    }
  }

  async saveProductShoppingCarMany(shoppingId: string, listData: ProductShoppingCar[], queryRunner?: QueryRunner) {
    await this.repository.createQueryBuilder('product_shopping_car', queryRunner)
      .insert()
      .into(ProductShoppingCarEntity)
      .values([
        ...listData.map(shoppingitem => ({
          pcx: shoppingitem.pcx,
          ['product' as string]: shoppingitem.product,
          ['shopping' as string]: shoppingId
        }))
      ]).execute()
  }
}
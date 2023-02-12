import {DaoCategory} from "../../../../domain/category/dao/dao-category";
import {CategoryListProductDto} from "../../../../aplication/category/comander/dto/category-list-product.dto";
import {Injectable} from "@nestjs/common";
import {InjectEntityManager} from "@nestjs/typeorm";
import {createQueryBuilder, EntityManager} from "typeorm";
import {CategoryListDto} from "../../../../aplication/category/comander/dto/category-list.dto";

@Injectable()
export class DaoCategoryPostgresql implements DaoCategory {

  constructor(@InjectEntityManager() private entityManager: EntityManager) {
  }

  async listProducts(): Promise<CategoryListProductDto[]> {
    const query = createQueryBuilder<CategoryListProductDto>('Category', 'c').innerJoinAndSelect(
      'c.products',  'p'
    ).select([ 'c.id', 'c.name', 'p.id', 'p.name' ])
    return query.getMany()
  }

  list(): Promise<CategoryListDto[]> {
    const query = createQueryBuilder<CategoryListDto>('Category', 'c')
      .select([ 'c.id', 'c.name' ])
    return query.getMany()
  }

}
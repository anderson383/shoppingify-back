import { DaoCategory } from '../../../../domain/category/dao/dao-category';
import { CategoryListProductDto } from '../../../../aplication/category/comander/dto/category-list-product.dto';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { createQueryBuilder, EntityManager, getRepository } from 'typeorm';
import { CategoryListDto } from '../../../../aplication/category/comander/dto/category-list.dto';

@Injectable()
export class DaoCategoryPostgresql implements DaoCategory {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  async listProducts(): Promise<CategoryListProductDto[]> {
    const query = createQueryBuilder<CategoryListProductDto>('Category', 'c')
      .innerJoinAndSelect('c.products', 'p')
      .select(['c.id', 'c.name', 'p.id', 'p.name']);
    return query.getMany();
  }

  async listProductsHistory(id: string): Promise<any> {
    const queryShopping = createQueryBuilder('ShoppingCar', 'sp')
      .select([
        'sp."id"',
        'sp."name"',
        `TO_CHAR(sp.create_date, 'Day dd.mm.YYYY') as date`,
      ])
      .where('sp.id=:id', { id });

    const query = createQueryBuilder('Category', 'cat')
      .innerJoin('cat.products', 'prod')
      .innerJoin('prod.list_history', 'history')
      .where('history.shopping=:id', {
        id,
      })
      .select(['cat.id', 'cat.name', 'prod.id', 'prod.name', 'history.pcx']);
    const [shopping, list_categories] = await Promise.all([
      queryShopping.getRawOne(),
      query.getMany(),
    ]);
    return {
      ...shopping,
      list_categories,
    };
  }

  list(): Promise<CategoryListDto[]> {
    const query = createQueryBuilder<CategoryListDto>('Category', 'c').select([
      'c.id',
      'c.name',
    ]);
    return query.getMany();
  }
}

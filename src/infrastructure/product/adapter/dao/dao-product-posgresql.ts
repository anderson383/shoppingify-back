import { DaoProduct } from '../../../../domain/product/port/dao/dao-product';
import { Injectable } from '@nestjs/common';
import { ProductDto } from '../../../../aplication/product/comander/dto/product.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { createQueryBuilder, EntityManager } from 'typeorm';

@Injectable()
export class DaoProductPosgresql implements DaoProduct {
  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {}

  async list(): Promise<ProductDto[]> {
    const query = createQueryBuilder<ProductDto>('Product', 'p')
      .leftJoinAndSelect('p.category', 'c')
      .select(['p.id', 'p.name', 'p.note', 'p.image', 'c.name']);
    return query.getMany();
  }

  async get(id: string): Promise<ProductDto> {
    return createQueryBuilder<ProductDto>('Product', 'p')
      .where(`p.id = :id`, { id })
      .leftJoinAndSelect('p.category', 'c')
      .select(['p.id', 'p.name', 'p.note', 'p.image', 'c.name'])
      .getOne();
  }
}

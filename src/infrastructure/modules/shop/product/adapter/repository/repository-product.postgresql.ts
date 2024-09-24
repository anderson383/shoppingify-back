import { RepositoryProduct } from 'src/domain/ports/shop/repository/repository-product';
import { ProductEntity } from '../../entity/product.entity';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Product } from 'src/domain/models/product';

export class RepositoryProductPostgresql implements RepositoryProduct {
  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
    @InjectRepository(ProductEntity)
    private readonly repository: Repository<ProductEntity>,
  ) {}

  async save(product: Product) {
    await this.entityManager
      .createQueryBuilder()
      .insert()
      .into(ProductEntity)
      .values({
        name: product.name,
        image: product.image,
        note: product.note,
        ['category' as string]: product.category,
      })
      .execute();
  }
}

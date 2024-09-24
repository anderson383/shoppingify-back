import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';
import { ProductEntity } from 'src/infrastructure/modules/shop/product/entity/product.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';

@Entity({ name: 'Category' })
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany((_type) => ProductEntity, (task) => task.category, { eager: true })
  products: ProductEntity[];
}

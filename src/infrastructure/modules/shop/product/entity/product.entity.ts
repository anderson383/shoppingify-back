import { CategoryEntity } from 'src/infrastructure/modules/config/category/entity/category.entity';
import { ProductShoppingCarEntity } from './../../product-shopping-car/entity/ProductShoppingCar.entity';
import {
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  Entity,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';

@Entity({ name: 'Product' })
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  note: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  image: string;

  @ManyToOne((type) => CategoryEntity)
  category: CategoryEntity;

  @OneToMany((_type) => ProductShoppingCarEntity, (task) => task.product, {
    eager: true,
  })
  list_history: ProductShoppingCarEntity[];
}

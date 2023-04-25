import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../base/entity/base.entity';
import { ProductShoppingCarEntity } from 'src/infrastructure/product-shopping-car/entity/ProductShoppingCar.entity';

@Entity('ShoppingCar')
export class ShoppingCarEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  status: string;

  @ManyToMany((_type) => ProductShoppingCarEntity)
  shopping: ProductShoppingCarEntity;
}

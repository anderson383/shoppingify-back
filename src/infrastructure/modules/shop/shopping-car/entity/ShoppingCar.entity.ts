import { Column, Entity, ManyToMany } from 'typeorm';
import { ProductShoppingCarEntity } from '../../product-shopping-car/entity/ProductShoppingCar.entity';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';

@Entity('ShoppingCar')
export class ShoppingCarEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  status: string;

  @ManyToMany((_type) => ProductShoppingCarEntity)
  shopping: ProductShoppingCarEntity;
}

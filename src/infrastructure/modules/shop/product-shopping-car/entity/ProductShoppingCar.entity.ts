import { Column, Entity, ManyToOne } from 'typeorm';
import { ProductEntity } from '../../product/entity/product.entity';
import { ShoppingCarEntity } from '../../shopping-car/entity/ShoppingCar.entity';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';

@Entity({ name: 'ProductShoppingCar' })
export class ProductShoppingCarEntity extends BaseEntity {
  @Column()
  pcx: number;

  @ManyToOne((_type) => ProductEntity)
  product: ProductEntity;

  @ManyToOne((_type) => ShoppingCarEntity)
  shopping: ShoppingCarEntity;
}

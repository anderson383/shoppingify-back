import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ProductEntity} from "../../product/entity/product.entity";
import {ShoppingCarEntity} from "../../shopping-car/entity/ShoppingCar.entity";


@Entity({name: 'ProductShoppingCar'})
export class ProductShoppingCarEntity {


  @PrimaryGeneratedColumn('uuid')
  id: string


  @Column()
  pcx: number

  @ManyToOne(_type => ProductEntity)
  product: ProductEntity

  @ManyToOne(_type => ShoppingCarEntity)
  shopping: ShoppingCarEntity
}
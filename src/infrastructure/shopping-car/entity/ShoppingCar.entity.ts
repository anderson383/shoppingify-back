import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../../base/entity/base.entity";


@Entity('ShoppingCar')
export class ShoppingCarEntity extends BaseEntity {

  @Column()
  name: string

  @Column()
  status: string
}
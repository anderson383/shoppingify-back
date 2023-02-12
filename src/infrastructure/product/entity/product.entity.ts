
import {PrimaryGeneratedColumn, ManyToOne, Column, Entity} from 'typeorm'
import {BaseEntity} from "../../base/entity/base.entity";
import {CategoryEntity} from "../../category/entity/category.entity";
import {JoinColumn} from "typeorm/browser";

@Entity({name: 'Product'})
export class ProductEntity extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({
    nullable: true,
    type: 'text'
  })
  note: string

  @Column({
    nullable: true,
    type: 'text'
  })
  image: string


  @ManyToOne(type => CategoryEntity)
  category: CategoryEntity

}
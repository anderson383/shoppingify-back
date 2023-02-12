
import {PrimaryGeneratedColumn, ManyToOne, Entity, Column, OneToMany} from 'typeorm'
import {BaseEntity} from "../../base/entity/base.entity";
import {ProductEntity} from "../../product/entity/product.entity";

@Entity({name: 'Category'})
export class CategoryEntity extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(_type => ProductEntity, task => task.category, { eager: true })
  products: ProductEntity[]
}
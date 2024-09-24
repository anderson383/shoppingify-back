import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';
import { ProductEntity } from 'src/infrastructure/modules/shop/product/entity/product.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';

@Entity({ name: 'User' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  full_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

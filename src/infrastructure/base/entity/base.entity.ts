
import {Column, PrimaryGeneratedColumn} from 'typeorm'

export class BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  create_date: Date

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'NOW()'
  })
  update_date: Date

}
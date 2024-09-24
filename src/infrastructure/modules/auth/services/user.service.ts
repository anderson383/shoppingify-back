import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  async getByEmail(email: string): Promise<any> {
    const query = this.entityManager
      .createQueryBuilder('User', 'user')
      .select([
        'user.id',
        'user.full_name',
        'user.last_name',
        'user.password',
        'user.email',
      ])
      .where('user.email=:email', { email });

    return query.getOne();
  }
}

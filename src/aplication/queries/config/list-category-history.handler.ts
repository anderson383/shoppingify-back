import { Injectable } from '@nestjs/common';
import { CategoryDao } from 'src/domain/ports/config/dao/dao-category';
@Injectable()
export class ListCategoryHistoryHandler {
  constructor(private _daoCategory: CategoryDao) {}

  async execute(id: string): Promise<any> {
    return this._daoCategory.listProductsHistory(id);
  }
}

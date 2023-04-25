import { Injectable } from '@nestjs/common';
import { DaoCategory } from 'src/domain/category/dao/dao-category';
@Injectable()
export class ListCategoryHistoryHandler {
  constructor(private _daoCategory: DaoCategory) {}

  async execute(id: string): Promise<any> {
    return this._daoCategory.listProductsHistory(id);
  }
}

import { Injectable } from '@nestjs/common';
import { CategoryListDto } from 'src/aplication/commanders/dtos/category-list.dto';
import { CategoryDao } from 'src/domain/ports/config/dao/dao-category';

@Injectable()
export class ListCategoryHandler {
  constructor(private _daoCategory: CategoryDao) {}

  async execute(): Promise<CategoryListDto[]> {
    return this._daoCategory.list();
  }
}

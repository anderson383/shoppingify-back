import { CategoryListProductDto } from 'src/aplication/commanders/dtos/category-list-product.dto';
import { Injectable } from '@nestjs/common';
import { CategoryDao } from 'src/domain/ports/config/dao/dao-category';

@Injectable()
export class ListCategoryProductHandler {
  constructor(private _daoCategory: CategoryDao) {}

  async execute(): Promise<CategoryListProductDto[]> {
    return this._daoCategory.listProducts();
  }
}

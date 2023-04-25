import { CategoryListProductDto } from '../comander/dto/category-list-product.dto';
import { DaoCategory } from '../../../domain/category/dao/dao-category';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListCategoryProductHandler {
  constructor(private _daoCategory: DaoCategory) {}

  async execute(): Promise<CategoryListProductDto[]> {
    return this._daoCategory.listProducts();
  }
}

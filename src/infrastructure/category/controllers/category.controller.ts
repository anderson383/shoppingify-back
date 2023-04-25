import { Controller, Get, Param } from '@nestjs/common';
import { ListCategoryProductHandler } from '../../../aplication/category/consult/list-category-product.handler';
import { ListCategoryHandler } from '../../../aplication/category/consult/list-category.handler';
import { ListCategoryHistoryHandler } from 'src/aplication/category/consult/list-category-history.handler';

@Controller('category')
export class CategoryController {
  constructor(
    private _listCategory: ListCategoryHandler,
    private _listCategoryProduct: ListCategoryProductHandler,
    private _listCategoryHistory: ListCategoryHistoryHandler,
  ) {}

  @Get('/list')
  async list() {
    return this._listCategory.execute();
  }

  @Get('/list-products')
  async listCategoryProduct() {
    return this._listCategoryProduct.execute();
  }

  @Get('/history/:id')
  async listCategoryHistory(@Param('id') id: string) {
    return this._listCategoryHistory.execute(id);
  }
}

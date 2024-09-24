import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ListCategoryHistoryHandler } from 'src/aplication/queries/config/list-category-history.handler';
import { ListCategoryProductHandler } from 'src/aplication/queries/config/list-category-product.handler';
import { ListCategoryHandler } from 'src/aplication/queries/config/list-category.handler';
import { AuthGuard } from 'src/infrastructure/modules/auth/guards/auth.guard';

@Controller('category')
@UseGuards(AuthGuard)
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

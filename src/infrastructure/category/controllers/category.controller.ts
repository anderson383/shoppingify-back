import {Controller, Get} from "@nestjs/common";
import {ListCategoryProductHandler} from "../../../aplication/category/consult/list-category-product.handler";
import {ListCategoryHandler} from "../../../aplication/category/consult/list-category.handler";


@Controller('category')
export class CategoryController {

  constructor(
    private _listCategory: ListCategoryHandler,
    private _listCategoryProduct: ListCategoryProductHandler
  ) {}


  @Get('/list')
  async list() {
    return this._listCategory.execute()
  }

  @Get('/list-products')
  async listCategoryProduct() {
    return this._listCategoryProduct.execute()
  }
}
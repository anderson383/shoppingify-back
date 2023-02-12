import {Module} from "@nestjs/common";
import {ListCategoryProductHandler} from "../../../aplication/category/consult/list-category-product.handler";
import {DaoCategory} from "../../../domain/category/dao/dao-category";
import {DaoCategoryPostgresql} from "../adapter/dao/dao-category-postgresql";
import {ListCategoryHandler} from "../../../aplication/category/consult/list-category.handler";


@Module({
  providers: [
    ListCategoryProductHandler,
    ListCategoryHandler,
    { provide: DaoCategory, useClass: DaoCategoryPostgresql }
  ],
  exports: [
    ListCategoryProductHandler,
    ListCategoryHandler
  ]
})
export class CategoryProviderModule {}
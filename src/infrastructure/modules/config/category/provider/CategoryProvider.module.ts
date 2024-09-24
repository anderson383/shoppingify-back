import { Module } from '@nestjs/common';
import { ListCategoryProductHandler } from 'src/aplication/queries/config/list-category-product.handler';
import { ListCategoryHandler } from 'src/aplication/queries/config/list-category.handler';
import { ListCategoryHistoryHandler } from 'src/aplication/queries/config/list-category-history.handler';
import { CategoryDao } from 'src/domain/ports/config/dao/dao-category';
import { CategoryDaoService } from '../adapter/dao/category-dao.service';

@Module({
  providers: [
    ListCategoryProductHandler,
    ListCategoryHandler,
    ListCategoryHistoryHandler,
    { provide: CategoryDao, useClass: CategoryDaoService },
  ],
  exports: [
    ListCategoryProductHandler,
    ListCategoryHandler,
    ListCategoryHistoryHandler,
  ],
})
export class CategoryProviderModule {}

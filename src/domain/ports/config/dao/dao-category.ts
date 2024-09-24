import { CategoryListProductDto } from 'src/aplication/commanders/dtos/category-list-product.dto';
import { CategoryListDto } from 'src/aplication/commanders/dtos/category-list.dto';

export abstract class CategoryDao {
  abstract listProducts(): Promise<CategoryListProductDto[]>;
  abstract listProductsHistory(id: string): Promise<any>;
  abstract list(): Promise<CategoryListDto[]>;
}

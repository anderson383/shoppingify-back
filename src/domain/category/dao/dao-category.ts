import { CategoryListProductDto } from '../../../aplication/category/comander/dto/category-list-product.dto';
import { CategoryListDto } from '../../../aplication/category/comander/dto/category-list.dto';

export abstract class DaoCategory {
  abstract listProducts(): Promise<CategoryListProductDto[]>;
  abstract listProductsHistory(id: string): Promise<any>;
  abstract list(): Promise<CategoryListDto[]>;
}

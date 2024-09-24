import { IsEmpty } from 'class-validator';
import { ProductEntity } from 'src/infrastructure/modules/shop/product/entity/product.entity';

export class CategoryListProductDto {
  @IsEmpty()
  name: string;

  @IsEmpty()
  products: ProductEntity[];
}

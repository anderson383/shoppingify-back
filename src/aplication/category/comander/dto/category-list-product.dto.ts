import {ProductEntity} from "../../../../infrastructure/product/entity/product.entity";
import {IsEmpty} from "class-validator";


export class CategoryListProductDto {
  @IsEmpty()
  name: string

  @IsEmpty()
  products: ProductEntity[]
}
import {IsNotEmpty, IsEmpty} from "class-validator";
import {CategoryEntity} from "../../../../infrastructure/category/entity/category.entity";

export class ProductDto {
  @IsNotEmpty()
  name: string

  @IsEmpty()
  note: string

  @IsEmpty()
  image: string

  @IsNotEmpty()
  category: CategoryEntity
}
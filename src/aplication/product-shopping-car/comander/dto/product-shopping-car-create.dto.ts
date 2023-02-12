import {ProductShoppingDto} from "./product-shopping.dto";
import {ArrayMinSize, IsArray, IsNotEmpty, IsString, MinLength, ValidateNested} from "class-validator";
import {Type} from "class-transformer";


export class ProductShoppingCarCreateDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({
    each:true
  })
  @ArrayMinSize(1)
  @Type(() => ProductShoppingDto)
  products: ProductShoppingDto[]
}
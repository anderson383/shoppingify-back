import {IsNotEmpty, IsNumber, IsString, IsUUID} from "class-validator";


export class ProductShoppingDto {
  @IsNumber()
  @IsNotEmpty()
  pcx: number

  @IsString()
  @IsUUID()
  @IsNotEmpty()
  product: string
}
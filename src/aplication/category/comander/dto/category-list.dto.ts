import {IsEmpty} from "class-validator";


export class CategoryListDto {
  @IsEmpty()
  id: string

  @IsEmpty()
  name: string
}
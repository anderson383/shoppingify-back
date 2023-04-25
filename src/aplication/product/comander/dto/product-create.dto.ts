import {
  IsNotEmpty,
  IsEmpty,
  IsUUID,
  IsString,
  IsOptional,
  IsUrl,
} from 'class-validator';

export class ProductCreateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  note: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  image: string;

  @IsNotEmpty()
  @IsUUID()
  category: string;
}

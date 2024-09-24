import { Injectable } from '@nestjs/common';
import { ProductCreateDto } from 'src/aplication/commanders/dtos/product-create.dto';
import { Product } from 'src/domain/models/product';
import { ServiceProduct } from 'src/domain/ports/shop/repository/service-product';

@Injectable()
export class CreateProductHandler {
  constructor(private _serviceProduct: ServiceProduct) {}

  async execute(productCreateDto: ProductCreateDto) {
    await this._serviceProduct.execute(
      new Product(
        productCreateDto.name,
        productCreateDto.note,
        productCreateDto.image,
        productCreateDto.category,
      ),
    );
  }
}

import { ProductDto } from 'src/aplication/commanders/dtos/product.dto';
import { Injectable } from '@nestjs/common';
import { DaoProduct } from 'src/domain/ports/shop/dao/dao-product';

@Injectable()
export class ListProductHandler {
  constructor(private _daoProduct: DaoProduct) {}

  async execute(): Promise<ProductDto[]> {
    return this._daoProduct.list();
  }
}

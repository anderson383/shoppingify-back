import {ProductDto} from "../comander/dto/product.dto";
import {DaoProduct} from "../../../domain/product/port/dao/dao-product";
import {Injectable} from "@nestjs/common";

@Injectable()
export class ListProductHandler {

  constructor(private _daoProduct: DaoProduct) {}

  async execute (): Promise<ProductDto[]> {
    return this._daoProduct.list()
  }
}
import {Injectable} from "@nestjs/common";
import {ProductCreateDto} from "./dto/product-create.dto";
import {ServiceProduct} from "../../../domain/product/service/service-product";
import {Product} from "../../../domain/product/model/product";


@Injectable()
export class CreateProductHandler {

  constructor(private _serviceProduct: ServiceProduct) {

  }

  async execute(productCreateDto: ProductCreateDto) {
    await this._serviceProduct.execute(
      new Product(
        productCreateDto.name,
        productCreateDto.note,
        productCreateDto.image,
        productCreateDto.category
      )
    )
  }
}
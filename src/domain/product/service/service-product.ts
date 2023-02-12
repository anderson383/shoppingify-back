import {RepositoryProduct} from "../port/repository/repository-product";
import {Product} from "../model/product";


export class ServiceProduct {

  constructor(private readonly _repositoryProduct: RepositoryProduct) {}

  async execute(product: Product) {
    await this._repositoryProduct.save(product)
  }
}
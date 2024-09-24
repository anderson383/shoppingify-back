import { Product } from 'src/domain/models/product';
import { RepositoryProduct } from 'src/domain/ports/shop/repository/repository-product';

export class ServiceProduct {
  constructor(private readonly _repositoryProduct: RepositoryProduct) {}

  async execute(product: Product) {
    await this._repositoryProduct.save(product);
  }
}

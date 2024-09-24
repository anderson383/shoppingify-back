import { Product } from 'src/domain/models/product';

export abstract class RepositoryProduct {
  abstract save(product: Product);
}

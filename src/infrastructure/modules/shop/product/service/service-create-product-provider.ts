import { RepositoryProduct } from 'src/domain/ports/shop/repository/repository-product';
import { ServiceProduct } from 'src/domain/ports/shop/repository/service-product';

export const ServiceCreateProductProvider = (
  repositoryProduct: RepositoryProduct,
) => {
  return new ServiceProduct(repositoryProduct);
};

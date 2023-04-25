import { RepositoryProduct } from '../../../../domain/product/port/repository/repository-product';
import { ServiceProduct } from '../../../../domain/product/service/service-product';

export const ServiceCreateProductProvider = (
  repositoryProduct: RepositoryProduct,
) => {
  return new ServiceProduct(repositoryProduct);
};

import { RepositoryProductShoppingCar } from 'src/domain/ports/shop/repository/repository-product-shopping-car';
import { ServiceProductShoppingCar } from 'src/domain/ports/shop/repository/service-product-shopping-car';

export const ServiceCreateProductShoppingCarProvider = (
  repository: RepositoryProductShoppingCar,
) => new ServiceProductShoppingCar(repository);

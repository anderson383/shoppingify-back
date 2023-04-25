import { RepositoryProductShoppingCar } from '../../../../domain/product-shopping-car/port/repository/repository-product-shopping-car';
import { ServiceProductShoppingCar } from '../../../../domain/product-shopping-car/service/service-product-shopping-car';

export const ServiceCreateProductShoppingCarProvider = (
  repository: RepositoryProductShoppingCar,
) => new ServiceProductShoppingCar(repository);

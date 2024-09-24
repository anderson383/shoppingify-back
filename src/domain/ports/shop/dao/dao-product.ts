import { ProductDto } from 'src/aplication/commanders/dtos/product.dto';

export abstract class DaoProduct {
  abstract list(): Promise<ProductDto[]>;
  abstract get(id: string): Promise<ProductDto>;
}

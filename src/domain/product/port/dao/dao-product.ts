import {ProductDto} from "../../../../aplication/product/comander/dto/product.dto";

export abstract class DaoProduct {
  abstract list(): Promise<ProductDto[]>
  abstract get(id:string): Promise<ProductDto>
}
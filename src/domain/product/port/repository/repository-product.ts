import {Product} from "../../model/product";


export abstract class RepositoryProduct {
  abstract save(product: Product)
}
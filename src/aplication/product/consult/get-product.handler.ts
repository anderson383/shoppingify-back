const fs = require('fs')
import {Injectable} from "@nestjs/common";
import {DaoProduct} from "../../../domain/product/port/dao/dao-product";
import {ProductDto} from "../comander/dto/product.dto";



@Injectable()
export class GetProductHandler {

  constructor(
    private _productDao: DaoProduct
  ) { }

  async execute (id: string): Promise<ProductDto>{
    const IMAGE_DEFAULT = 'https://static.vecteezy.com/system/resources/previews/002/806/354/non_2x/shopping-basket-with-products-vector.jpg'
    const product = await this._productDao.get(id)
    product.image = await existFile(product.image, IMAGE_DEFAULT)
    return product
  }
}

const existFile = async (urlFile: string, defaultFile: string) => {
  let file = urlFile
  if (urlFile) {
    await fs.access(urlFile, err => { if (err) file = defaultFile })
  } else file = defaultFile
  return file
}
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductDto } from '../../../aplication/product/comander/dto/product.dto';
import { ListProductHandler } from '../../../aplication/product/consult/list-product.handler';
import { GetProductHandler } from '../../../aplication/product/consult/get-product.handler';
import { ProductCreateDto } from '../../../aplication/product/comander/dto/product-create.dto';
import { CreateProductHandler } from '../../../aplication/product/comander/create-product.handler';

@Controller('product')
export class ProductController {
  constructor(
    private readonly _listProductHandler: ListProductHandler,
    private readonly _getProductHandler: GetProductHandler,
    private readonly _createProductHandler: CreateProductHandler,
  ) {}

  @Get()
  async list(): Promise<ProductDto[]> {
    return this._listProductHandler.execute();
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<ProductDto> {
    return this._getProductHandler.execute(id);
  }

  @Post()
  async save(@Body() createProduct: ProductCreateDto) {
    console.log(createProduct, 'controller');
    return this._createProductHandler.execute(createProduct);
  }
}

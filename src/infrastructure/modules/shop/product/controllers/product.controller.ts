import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { GetProductHandler } from 'src/aplication/queries/shop/get-product.handler';
import { ListProductHandler } from 'src/aplication/queries/shop/list-product.handler';
import { ProductDto } from 'src/aplication/commanders/dtos/product.dto';
import { ProductCreateDto } from 'src/aplication/commanders/dtos/product-create.dto';
import { CreateProductHandler } from 'src/aplication/commanders/shop/create-product.handler';
import { AuthGuard } from 'src/infrastructure/modules/auth/guards/auth.guard';

@Controller('product')
@UseGuards(AuthGuard)
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

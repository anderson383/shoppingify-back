import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ProductShoppingCarCreateDto } from 'src/aplication/commanders/dtos/product-shopping-car-create.dto';
import { CreateProductShoppingCarHandler } from 'src/aplication/commanders/shop/create-product-shopping-car.handler';
import { AuthGuard } from 'src/infrastructure/modules/auth/guards/auth.guard';

@Controller('product-shopping-car')
@UseGuards(AuthGuard)
export class ProductShoppingCarController {
  constructor(
    private readonly createProductShoppingCarHandler: CreateProductShoppingCarHandler,
  ) {}

  @Post()
  async save(
    @Body() _productShoppingCarCreateDto: ProductShoppingCarCreateDto,
  ) {
    await this.createProductShoppingCarHandler.execute(
      _productShoppingCarCreateDto,
    );
  }
}

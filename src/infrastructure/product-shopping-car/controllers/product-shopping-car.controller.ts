import {Body, Controller, Injectable, Post} from "@nestjs/common";
import {CreateProductShoppingCarHandler} from "../../../aplication/product-shopping-car/comander/create-product-shopping-car.handler";
import {ProductShoppingCarCreateDto} from "../../../aplication/product-shopping-car/comander/dto/product-shopping-car-create.dto";

@Controller('product-shopping-car')
export class ProductShoppingCarController {

  constructor(
    private readonly createProductShoppingCarHandler: CreateProductShoppingCarHandler
  ) {
  }

  @Post()
  async save(@Body() _productShoppingCarCreateDto: ProductShoppingCarCreateDto) {
    await this.createProductShoppingCarHandler.execute(_productShoppingCarCreateDto)
  }
}
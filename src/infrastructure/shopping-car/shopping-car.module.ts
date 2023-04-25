import { Module } from '@nestjs/common';
import { ShoppingCarProvierModule } from './provider/ShoppingCarProvier.module';
import { ShoppingCarController } from './controllers/shopping-car.controller';

@Module({
  controllers: [ShoppingCarController],
  imports: [ShoppingCarProvierModule],
  exports: [ShoppingCarProvierModule],
})
export class ShoppingCarModule {}

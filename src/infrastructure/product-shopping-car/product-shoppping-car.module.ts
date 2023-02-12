import {Module} from "@nestjs/common";
import {ProductShoppingCarController} from "./controllers/product-shopping-car.controller";
import {ProductShoppingCarProviderModule} from "./provider/ProductShoppingCarProvider.module";


@Module({
  imports: [ProductShoppingCarProviderModule],
  controllers: [ ProductShoppingCarController ]
})
export class ProductShopppingCarModule {}
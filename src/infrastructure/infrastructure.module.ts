import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataBaseConfigFactory } from './config/data-base.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ProductShopppingCarModule } from './product-shopping-car/product-shoppping-car.module';
import { ShoppingCarModule } from './shopping-car/shopping-car.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: dataBaseConfigFactory,
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `env/${process.env.NODE_ENV}.env`,
      /* validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid(
          NodeEnv.DEVELOPMENT, NodeEnv.PRODUCTION
        ).required()
      }) */
    }),
    ProductModule,
    CategoryModule,
    ShoppingCarModule,
    ProductShopppingCarModule,
  ],
})
export class InfrastructureModule {}

import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductEntity } from './entity/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DaoProductPosgresql } from './adapter/dao/dao-product-posgresql';
import { DaoProduct } from 'src/domain/ports/shop/dao/dao-product';
import { ServiceProduct } from 'src/domain/ports/shop/repository/service-product';
import { RepositoryProduct } from 'src/domain/ports/shop/repository/repository-product';
import { RepositoryProductPostgresql } from './adapter/repository/repository-product.postgresql';
import { ListProductHandler } from 'src/aplication/queries/shop/list-product.handler';
import { GetProductHandler } from 'src/aplication/queries/shop/get-product.handler';
import { CreateProductHandler } from 'src/aplication/commanders/shop/create-product.handler';
import { ServiceCreateProductProvider } from './service/service-create-product-provider';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [
    { provide: DaoProduct, useClass: DaoProductPosgresql },
    {
      provide: ServiceProduct,
      inject: [RepositoryProduct],
      useFactory: ServiceCreateProductProvider,
    },
    { provide: RepositoryProduct, useClass: RepositoryProductPostgresql },

    ListProductHandler,
    GetProductHandler,
    CreateProductHandler,
  ],
  exports: [
    ServiceProduct,
    GetProductHandler,
    ListProductHandler,
    CreateProductHandler,
    RepositoryProduct,
  ],
})
export class ProductModule {}

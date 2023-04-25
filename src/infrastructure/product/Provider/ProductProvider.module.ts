import { Module } from '@nestjs/common';
import { ListProductHandler } from '../../../aplication/product/consult/list-product.handler';
import { DaoProduct } from '../../../domain/product/port/dao/dao-product';
import { DaoProductPosgresql } from '../adapter/dao/dao-product-posgresql';
import { GetProductHandler } from '../../../aplication/product/consult/get-product.handler';
import { CreateProductHandler } from '../../../aplication/product/comander/create-product.handler';
import { ServiceProduct } from '../../../domain/product/service/service-product';
import { ServiceCreateProductProvider } from './service/service-create-product-provider';
import { RepositoryProduct } from '../../../domain/product/port/repository/repository-product';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from '../entity/product.entity';
import { RepositoryProductPostgresql } from '../adapter/repository/repository-product.postgresql';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
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
export class ProductProviderModule {}

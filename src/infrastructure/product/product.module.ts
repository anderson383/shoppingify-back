import { Module } from '@nestjs/common';
import { ProductProviderModule } from './Provider/ProductProvider.module';
import { ProductController } from './controllers/product.controller';

@Module({
  imports: [ProductProviderModule],
  controllers: [ProductController],
})
export class ProductModule {}

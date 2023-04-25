import { Module } from '@nestjs/common';
import { CategoryProviderModule } from './provider/CategoryProvider.module';
import { CategoryController } from './controllers/category.controller';

@Module({
  imports: [CategoryProviderModule],
  controllers: [CategoryController],
})
export class CategoryModule {}

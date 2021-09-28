import { Module } from '@nestjs/common';
import {NewsModule} from './news/news.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilterCategoryModule } from './filter-category/filter-category.module';
import { AuthModule } from './auth/auth.module';
import { UploadImagesModule } from './upload-images/upload-images.module';

@Module({
  imports: [
    NewsModule,
    FilterCategoryModule,
    AuthModule,
    UploadImagesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'news',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],

})
export class AppModule {}

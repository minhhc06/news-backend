import { Module } from '@nestjs/common';
import {NewsModule} from './news/news.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    NewsModule,
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

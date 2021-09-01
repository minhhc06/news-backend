import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import {NewsRepository} from './news.repository'

@Module({
    imports: [ TypeOrmModule.forFeature([ NewsRepository ])],
    controllers: [NewsController],
    providers: [NewsService],
  })


export class NewsModule {}
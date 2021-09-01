import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsRepository } from './news.repository';
import { CreateNewsDto } from './dto/news.dto';
import { News } from './news.entity'

@Injectable()
export class NewsService  {
    constructor(
        @InjectRepository(NewsRepository) 
        private newsRepository: NewsRepository,
    ){}

    getNews(): Promise<News[]>{
        return this.newsRepository.getNews();
    }

    

    createTask(createTaskDto: CreateNewsDto) : Promise<News> {
        return this.newsRepository.createTask(createTaskDto);
    
    }

}
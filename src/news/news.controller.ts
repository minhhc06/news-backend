import { Body, Controller, Delete, Get, Param, Patch, Post, Query,  } from '@nestjs/common';
import { CreateNewsDto } from './dto/news.dto';
import { NewsService } from './news.service';
import { News } from './news.entity';
import { serialize, deserialize } from 'class-transformer';


@Controller('news')
export class NewsController {
    constructor(private newsService: NewsService) {}
   @Get()
     async getNews() {
      const user = serialize(await this.newsService.getNews());
      return {
        status: 200,
        message: 'ok',
        data: deserialize(News, user)
      };
    }
  
  


  @Post()
  createTask(@Body() createNewsDto: CreateNewsDto) : Promise<News>{
    return this.newsService.createTask(createNewsDto);
  }

}
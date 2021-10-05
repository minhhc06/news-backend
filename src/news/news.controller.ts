import { Body, Controller, Delete, Get, Param, Patch, Post, Query,  UploadedFile, UseInterceptors} from '@nestjs/common';
import { CreateNewsDto } from './dto/news.dto';
import { NewsService } from './news.service';
import { News } from './news.entity';
import { serialize, deserialize } from 'class-transformer';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from "multer";
import path = require('path');
import { v4 as uuidv4 } from 'uuid';


export const storage = {
  storage: diskStorage({
      destination: './uploads/newsimages',
      filename: (req, file, cb) => {
          const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
          const extension: string = path.parse(file.originalname).ext;

          cb(null, `${filename}${extension}`)
      }
  })

}

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
  @UseInterceptors(FileInterceptor('file', storage))
  createTask(@Body() createNewsDto: CreateNewsDto, @UploadedFile() file,) : Promise<News>{
    createNewsDto.image_name =
     "http://myhomem.com/news-upload-images/news-image/" + file.filename;
    console.log(createNewsDto);
    return this.newsService.createTask(createNewsDto);

  }

}
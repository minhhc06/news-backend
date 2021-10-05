import { EntityRepository, Repository } from 'typeorm';
import { News } from './news.entity';
import { CreateNewsDto } from './dto/news.dto';
import { InternalServerErrorException , UploadedFile} from '@nestjs/common';

@EntityRepository(News)
export class NewsRepository extends Repository<News> {

  async getNews(): Promise<News[]> {
    const query = this.createQueryBuilder('news');

    try {
        const tasks = await query.getMany();
        return tasks;
        
      } catch (error) {
        // this.logger.error(`Failed to get tasks for user "${user.username}". Filters: ${JSON.stringify(filterDto)}`, 
        // error.stack);
        throw new InternalServerErrorException();
      }

}

    async createTask(createTaskDto: CreateNewsDto) : Promise<News>{
    
        
        const { title, content, author, id_category, image_name  } = createTaskDto;

        // var file = file.filename;

        

        console.log(image_name);
    
        const news = this.create({
          title,
          content,
          author,
          id_category,
          image_name
        });
    
        await this.save(news);
        return news;
    }
}
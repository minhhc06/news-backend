import { EntityRepository, Repository } from 'typeorm';
import {Category} from './filter-category.entity'
import { InternalServerErrorException } from '@nestjs/common';


@EntityRepository(Category)
export class FilterCategoryRepository extends Repository<Category>{
    async getFilter(): Promise<Category[]> {
        const query = this.createQueryBuilder('category');
    
        try {
            const tasks = await query.getMany();
            return tasks;
            
          } catch (error) {
            // this.logger.error(`Failed to get tasks for user "${user.username}". Filters: ${JSON.stringify(filterDto)}`, 
            // error.stack);
            throw new InternalServerErrorException();
          }
    
    }
    
}
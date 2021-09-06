import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/auth/user.entitys';
import { Category } from './filter-category.entity';
import {FilterCategoryRepository} from './filter-category.repository';

@Injectable()
export class FilterCategoryService{
    constructor(
        @InjectRepository(FilterCategoryRepository) 
        private filterCategoryRepository: FilterCategoryRepository,
    ){}

    getNews(): Promise<Category[]>{
        return this.filterCategoryRepository.getFilter();
    }

    async getCategoryById(id: string, user: Users): Promise<Category>{
        
        const found = await this.filterCategoryRepository.findOne(id);
        found.user;
        console.log(found.user);
        
        // const found = await this.filterCategoryRepository.findOne({ where: { id }});

        if(!found){
            throw new NotFoundException(`Category with ID "${id}" not found`);
        }
 
        return found;
    }

}
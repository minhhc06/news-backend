import { Body, Controller, Delete, Get, Param, Patch, Post, Query,  } from '@nestjs/common';
import { serialize, deserialize } from 'class-transformer';
import { Category } from './filter-category.entity';
import {FilterCategoryService} from './filter-category.service';

@Controller('filter')
export class FilterCategoryController{
    constructor(private filterCategoryService: FilterCategoryService) {}

    @Get()
    async getCategory() {
     const user = serialize(await this.filterCategoryService.getNews());
     return {
       status: 200,
       message: 'ok',
       data: deserialize(Category, user)
     };
   }

   @Get('/find')
   getCategoryById(@Param('id') id: string) : Promise<Category> {
     return this.filterCategoryService.getCategoryById(id);
   }

}
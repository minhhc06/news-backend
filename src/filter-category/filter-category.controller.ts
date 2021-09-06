import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards,  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { serialize, deserialize } from 'class-transformer';
import { GetUser } from 'src/auth/get-user.decorator';
import { Users } from 'src/auth/user.entitys';
import { Category } from './filter-category.entity';
import {FilterCategoryService} from './filter-category.service';

@Controller('filter')
@UseGuards(AuthGuard())
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
   getCategoryById
   (
     @Param('id') id: string,
      @GetUser() user: Users
   ) : Promise<Category> {
     return this.filterCategoryService.getCategoryById(id, user);
   }

}
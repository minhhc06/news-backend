import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {FilterCategoryRepository} from './filter-category.repository';
import {FilterCategoryService} from './filter-category.service';
import {FilterCategoryController} from './filter-category.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [ TypeOrmModule.forFeature([ FilterCategoryRepository ]), AuthModule],
    controllers: [FilterCategoryController],
    providers: [FilterCategoryService],
  })

export class FilterCategoryModule{}
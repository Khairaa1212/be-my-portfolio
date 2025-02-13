// src/blog/blog.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  @Get()
  async findAll() {
    return this.blogService.findAll();
  }

  @Get(':slug') // Gunakan slug sebagai parameter
  async findOne(@Param('slug') slug: string) {
     return this.blogService.findOneBySlug(slug); // Panggil method findOneBySlug di service
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBlogDto: UpdateBlogDto,
  ) {
    return this.blogService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.blogService.remove(+id);
  }
}

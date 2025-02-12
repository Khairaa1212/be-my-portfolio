// src/blog/blog.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  // Create Blog
  async create(createBlogDto: CreateBlogDto) {
    return this.prisma.blog.create({
      data: {
        title: createBlogDto.title,
        body: createBlogDto.body,
        authorId: createBlogDto.authorId, // user_id sebagai foreign key
      },
    });
  }

  // Find All Blogs
  async findAll() {
    return this.prisma.blog.findMany({
      include: { author: true }, // Menyertakan informasi user yang menulis blog
    });
  }

  // Find One Blog
  async findOne(id: number) {
    return this.prisma.blog.findUnique({
      where: { id },
      include: { author: true }, // Menyertakan informasi user yang menulis blog
    });
  }

  // Update Blog
  async update(id: number, updateBlogDto: UpdateBlogDto) {
    return this.prisma.blog.update({
      where: { id },
      data: updateBlogDto,
    });
  }

  // Delete Blog
  async remove(id: number) {
    return this.prisma.blog.delete({
      where: { id },
    });
  }
}

// src/blog/blog.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  // Create Blog Post
  async create(createBlogDto: CreateBlogDto) {
    return this.prisma.blog.create({
      data: {
        title: createBlogDto.title,
        slug: createBlogDto.slug,
        body: createBlogDto.body,
        authorId: createBlogDto.authorId, // user_id sebagai foreign key
      },
    });
  }

  // Find All Blogs Get
  async findAll() {
    return this.prisma.blog.findMany({
      include: { author: true }, // Menyertakan informasi user yang menulis blog
    });
  }

  // Find One Blog Get by slug (ubah findOne untuk menggunakan slug)
  async findOneBySlug(slug: string) {
    return this.prisma.blog.findUnique({
      where: { slug },
      include: { author: true }, // Menyertakan informasi user yang menulis blog
    });
  }

  // Update Blog by id
  async update(id: number, updateBlogDto: UpdateBlogDto) {
    return this.prisma.blog.update({
      where: { id },
      data: updateBlogDto,
    });
  }

  // Delete Blog by id
  async remove(id: number) {
    return this.prisma.blog.delete({
      where: { id },
    });
  }
}

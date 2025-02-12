// src/blog/blog.module.ts
import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Mengimpor PrismaModule

@Module({
  imports: [PrismaModule],  // Pastikan PrismaModule diimpor di sini
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}

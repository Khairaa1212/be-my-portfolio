import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
    constructor(private prisma: PrismaService) {}

    async createProject(createProjectDto: CreateProjectDto) {
      console.log('ProjectService: createProject called with:', createProjectDto); // <-- Tambahkan log disini
      return this.prisma.project.create({
        data: {
            ...createProjectDto,
          },
      });
  }
}
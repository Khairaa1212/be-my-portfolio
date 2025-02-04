import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { NotFoundException } from '@nestjs/common';

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

    async deleteProject(id: number) {
      try {
          // await this.prisma.project.deleteMany({
          //     where: { userId: id },
          //   });

          
          const deletedUser = await this.prisma.project.delete({
            where: { id },
          });
    
          return deletedUser;

      } catch (error) {
          if (error.code === 'P2025') {
            throw new NotFoundException(`Project with ID ${id} not found`);
          }
          console.error('Error deleting project:', error);
          throw new Error('Failed to delete project');
      }
  }
}

  
  
// src/project/project.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectService {
    constructor(private prisma: PrismaService) {}
    
    async getProjectById(id: number) {
        return this.prisma.project.findUnique({
          where: { id },
        });
      }
}
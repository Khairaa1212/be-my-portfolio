// src/project/project.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get(':id')
  async getProjectById(@Param('id') id: string) {
    return this.projectService.getProjectById(Number(id));
  }
}
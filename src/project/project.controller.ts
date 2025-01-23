import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('project')
export class ProjectController {
    constructor(private projectService: ProjectService) {}

    @Post()
    async createProject(
      @Body(new ValidationPipe()) createProjectDto: CreateProjectDto,
    ) {
        console.log('ProjectController: POST /project called'); 
        return this.projectService.createProject(createProjectDto);
    }
}
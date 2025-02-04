import { Controller, Post, Delete, Param, Body, ValidationPipe, ParseIntPipe, NotFoundException, InternalServerErrorException } from '@nestjs/common';
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

    @Delete(':id')
    async deleteProject(
      @Param('id', new ParseIntPipe()) id: number,
    ){
      try {
          return await this.projectService.deleteProject(id);
      } catch (error) {
          if (error instanceof NotFoundException) {
              throw new NotFoundException(error.message);
          } else {
              throw new InternalServerErrorException(error.message);
          }
      }
    } 
}

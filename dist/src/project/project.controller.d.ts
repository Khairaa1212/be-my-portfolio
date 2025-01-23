import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
export declare class ProjectController {
    private projectService;
    constructor(projectService: ProjectService);
    createProject(createProjectDto: CreateProjectDto): Promise<{
        id: number;
        projectName: string;
        institutionName: string;
        userId: number;
    }>;
}

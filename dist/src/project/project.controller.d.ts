import { ProjectService } from './project.service';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    getProjectById(id: string): Promise<{
        id: number;
        projectName: string;
        institutionName: string;
        userId: number;
    }>;
}

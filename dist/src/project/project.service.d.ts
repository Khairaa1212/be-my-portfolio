import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
export declare class ProjectService {
    private prisma;
    constructor(prisma: PrismaService);
    createProject(createProjectDto: CreateProjectDto): Promise<{
        projectName: string;
        institutionName: string;
        userId: number;
        id: number;
    }>;
    deleteProject(id: number): Promise<{
        projectName: string;
        institutionName: string;
        userId: number;
        id: number;
    }>;
}

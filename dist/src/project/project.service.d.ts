import { PrismaService } from '../prisma/prisma.service';
export declare class ProjectService {
    private prisma;
    constructor(prisma: PrismaService);
    getProjectById(id: number): Promise<{
        id: number;
        projectName: string;
        institutionName: string;
        userId: number;
    }>;
}

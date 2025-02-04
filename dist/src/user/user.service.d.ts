import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getUserWithProjects(id: number): Promise<{
        firstName: string;
        lastName: string;
        avatar: string;
        projects: {
            projectName: string;
            institutionName: string;
        }[];
    }>;
}

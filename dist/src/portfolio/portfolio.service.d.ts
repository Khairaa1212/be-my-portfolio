import { PrismaService } from 'src/prisma/prisma.service';
export declare class PortfolioService {
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
    deletePortfolio(id: number): Promise<{
        id: number;
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        avatar: string | null;
        hobby: string | null;
    }>;
}

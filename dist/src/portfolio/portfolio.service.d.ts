import { PrismaService } from '../prisma/prisma.service';
import { Portfolio, Project } from '@prisma/client';
export declare class PortfolioService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        firstName: string;
        lastName: string;
        avatar: string;
        projectName: string;
        institutionName: string;
    }[]>;
    getPortfolioById(id: number): Promise<{
        firstName: string;
        lastName: string;
        avatar: string;
        projectName: string;
        institutionName: string;
    }>;
    createPortfolio(data: {
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        avatar: string;
        hobby: string;
    }): Promise<Portfolio>;
    createProject(data: {
        projectName: string;
        institutionName: string;
        userId: number;
    }): Promise<Project>;
    updatePortfolioById(id: number, data: {
        firstName: string;
        lastName: string;
        avatar: string;
        hobby: string;
    }): Promise<Portfolio>;
}

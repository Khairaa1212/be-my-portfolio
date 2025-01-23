import { PortfolioService } from './portfolio.service';
export declare class PortfolioController {
    private portfolioService;
    constructor(portfolioService: PortfolioService);
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

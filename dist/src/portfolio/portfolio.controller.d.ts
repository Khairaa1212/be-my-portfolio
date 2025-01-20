import { PortfolioService } from './portfolio.service';
export declare class PortfolioController {
    private readonly portfolioService;
    constructor(portfolioService: PortfolioService);
    getPortfolio(): Promise<{
        firstName: string;
        lastName: string;
        avatar: string;
        projectName: string;
        institutionName: string;
    }[]>;
    getPortfolioById(id: string): Promise<{
        firstName: string;
        lastName: string;
        avatar: string;
        projectName: string;
        institutionName: string;
    }>;
    createPortfolio(body: any): Promise<{
        id: number;
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        avatar: string;
        hobby: string;
    }>;
    createProject(body: any): Promise<{
        id: number;
        projectName: string;
        institutionName: string;
        userId: number;
    }>;
    updatePortfolio(id: string, body: any): Promise<{
        id: number;
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        avatar: string;
        hobby: string;
    }>;
}

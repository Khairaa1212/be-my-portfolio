import { PortfolioService } from './portfolio.service';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
export declare class PortfolioController {
    private readonly portfolioService;
    constructor(portfolioService: PortfolioService);
    getPortfolioById(id: string): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        avatar: string;
        projects: {
            id: number;
            projectName: string;
            institutionName: string;
        }[];
    }>;
    createPortfolio(data: CreatePortfolioDto): Promise<{
        projects: {
            id: number;
            projectName: string;
            institutionName: string;
            userId: number;
        }[];
    } & {
        firstName: string;
        lastName: string;
        avatar: string;
        id: number;
        username: string;
        password: string;
        hobby: string;
    }>;
    updatePortfolio(id: string, data: {
        firstName?: string;
        lastName?: string;
        avatar?: string;
        project_name?: string;
        institution_name?: string;
    }): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        avatar: string;
        projects: {
            id: number;
            projectName: string;
            institutionName: string;
        }[];
    }>;
}

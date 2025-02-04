import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
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

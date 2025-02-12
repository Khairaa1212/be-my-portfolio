import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        token: string;
    }>;
    getMe(req: any): Promise<{
        id: any;
        username: any;
    }>;
    register(body: any): Promise<any>;
    function(): Promise<void>;
}

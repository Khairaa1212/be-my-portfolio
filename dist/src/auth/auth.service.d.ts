import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(username: string, password: string): Promise<{
        token: string;
    }>;
    register(username: string, password: string, firstName: string, lastName: string, avatar: string, hobby: string): Promise<any>;
}

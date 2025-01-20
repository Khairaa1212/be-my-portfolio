import { PrismaService } from '../prisma/prisma.service';
import { CreatePrismaDto } from './dto/create-prisma.dto';
import { UpdatePrismaDto } from './dto/update-prisma.dto';
export declare class PrismaController {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createPrismaDto: CreatePrismaDto): Promise<{
        id: number;
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        avatar: string;
        hobby: string;
    }>;
    findAll(): Promise<{
        id: number;
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        avatar: string;
        hobby: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        avatar: string;
        hobby: string;
    }>;
    update(id: string, updatePrismaDto: UpdatePrismaDto): Promise<{
        id: number;
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        avatar: string;
        hobby: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        avatar: string;
        hobby: string;
    }>;
}

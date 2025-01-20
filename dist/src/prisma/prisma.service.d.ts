import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient {
    constructor();
    create(data: any): Promise<{
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
    findOne(id: number): Promise<{
        id: number;
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        avatar: string;
        hobby: string;
    }>;
    update(id: number, data: any): Promise<{
        id: number;
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        avatar: string;
        hobby: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        avatar: string;
        hobby: string;
    }>;
}

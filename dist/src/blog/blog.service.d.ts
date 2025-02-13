import { PrismaService } from '../prisma/prisma.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
export declare class BlogService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createBlogDto: CreateBlogDto): Promise<{
        id: number;
        title: string;
        slug: string;
        body: string;
        authorId: number;
    }>;
    findAll(): Promise<({
        author: {
            id: number;
            username: string;
            password: string;
            firstName: string;
            lastName: string;
            avatar: string | null;
            hobby: string | null;
        };
    } & {
        id: number;
        title: string;
        slug: string;
        body: string;
        authorId: number;
    })[]>;
    findOneBySlug(slug: string): Promise<{
        author: {
            id: number;
            username: string;
            password: string;
            firstName: string;
            lastName: string;
            avatar: string | null;
            hobby: string | null;
        };
    } & {
        id: number;
        title: string;
        slug: string;
        body: string;
        authorId: number;
    }>;
    update(id: number, updateBlogDto: UpdateBlogDto): Promise<{
        id: number;
        title: string;
        slug: string;
        body: string;
        authorId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        slug: string;
        body: string;
        authorId: number;
    }>;
}

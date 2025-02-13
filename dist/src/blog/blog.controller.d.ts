import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
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
    findOne(slug: string): Promise<{
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
    update(id: string, updateBlogDto: UpdateBlogDto): Promise<{
        id: number;
        title: string;
        slug: string;
        body: string;
        authorId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        title: string;
        slug: string;
        body: string;
        authorId: number;
    }>;
}

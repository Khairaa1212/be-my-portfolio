// src/blog/dto/create-blog.dto.ts
export class CreateBlogDto {
    title: string;
    slug: string;
    body: string;
    authorId: number; // user_id sebagai foreign key
  }
  
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async getUserWithProjects(id: number) { 
        try {
            const user = await this.prisma.user.findUnique({
                where: { id },
                include: {
                projects: true,
                },
            });

            if (!user) {
                throw new NotFoundException('User not found');
            }
        
            return {
                firstName: user.firstName,
                lastName: user.lastName,
                avatar: user.avatar,
                projects: user.projects.map(project => ({
                    projectName: project.projectName,
                    institutionName: project.institutionName
                }))
            };
        } catch (error) {
            console.error('Error in getUserWithProjects:', error);
            throw new Error('Failed to get user with projects');
        }
    }
}
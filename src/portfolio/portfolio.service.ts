import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PortfolioService {
    constructor(private prisma: PrismaService) {}

    async getUserWithProjects(id: number) { 
        try {
            const user = await this.prisma.portfolio.findUnique({
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

    async deletePortfolio(id: number) {
        try {
            await this.prisma.project.deleteMany({
                where: { userId: id },
              });
            
            const deletedUser = await this.prisma.portfolio.delete({
              where: { id },
            });
      
            return deletedUser;

        } catch (error) {
            if (error.code === 'P2025') {
              throw new NotFoundException(`Portfolio with ID ${id} not found`);
            }
            console.error('Error deleting portfolio:', error);
            throw new Error('Failed to delete portfolio');
        }
    }
}
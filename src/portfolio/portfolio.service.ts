// src/portfolio/portfolio.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';

@Injectable()
export class PortfolioService {
    constructor(private prisma: PrismaService) {}

    async getPortfolioById(id: number) {
        const portfolio = await this.prisma.portfolio.findUnique({
            where: { id },
              include: { projects: true }
            });

        if (!portfolio) {
            throw new NotFoundException(`Portfolio with ID ${id} not found`);
        }

          return {
              id: portfolio.id,
                firstName: portfolio.firstName,
                  lastName: portfolio.lastName,
                  avatar: portfolio.avatar,
                projects: portfolio.projects.map(project => ({
                    id: project.id,
                      projectName: project.projectName,
                        institutionName: project.institutionName
                    })),
            }
        }

    async createPortfolio(data: CreatePortfolioDto) {
            const user = await this.prisma.portfolio.create({
                data: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    avatar: data.avatar,
                    username: `${data.firstName.toLowerCase()}-${data.lastName.toLowerCase()}`,
                    password: 'password',
                    hobby: null, // atau data.hobby jika ada
                }
            })
             await this.prisma.project.create({
                data: {
                    projectName: data.project_name,
                    institutionName: data.institution_name,
                    userId: user.id,
                }
            })
             return this.prisma.portfolio.findUnique({
                where: {
                   id: user.id
                },
                 include: {
                   projects: true
                 }
            })
        }


  async updatePortfolio(id: number, data: { firstName?: string; lastName?: string; avatar?: string; project_name?: string; institution_name?:string }) {

        const portfolio = await this.prisma.portfolio.findUnique({ where: { id }, include: { projects: true } })

         if(!portfolio){
          throw new NotFoundException(`Portfolio with ID ${id} not found`)
         }

      let updatedPortfolio;

     if(data.firstName || data.lastName || data.avatar){
        updatedPortfolio = await this.prisma.portfolio.update({
            where: { id },
              data: {
                firstName: data.firstName,
                  lastName: data.lastName,
                  avatar: data.avatar
              },
          });
     }


     if(data.project_name || data.institution_name){
        await this.prisma.project.updateMany({
          where: { userId: id},
            data: {
                  projectName: data.project_name,
                    institutionName: data.institution_name
              },
        })
     }


    const updatedPortfolioData = await this.prisma.portfolio.findUnique({
          where: { id },
          include: { projects: true },
       });
    
       return {
         id: updatedPortfolioData.id,
        firstName: updatedPortfolioData.firstName,
          lastName: updatedPortfolioData.lastName,
          avatar: updatedPortfolioData.avatar,
            projects: updatedPortfolioData.projects.map(project => ({
              id: project.id,
                projectName: project.projectName,
                  institutionName: project.institutionName
            })),
      }
  }
}
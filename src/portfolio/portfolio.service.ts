import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Portfolio, Project } from '@prisma/client';

@Injectable()
export class PortfolioService {
  constructor(private prisma: PrismaService) {}

  // Mendapatkan semua portfolio dan proyek terkait
  async getAll(): Promise<{ firstName: string; lastName: string; avatar: string; projectName: string; institutionName: string }[]> {
    const portfolios = await this.prisma.portfolio.findMany({
      include: {
        projects: true,
      },
    });

    return portfolios.map((portfolio) => ({
      firstName: portfolio.firstName,
      lastName: portfolio.lastName,
      avatar: portfolio.avatar,
      projectName: portfolio.projects[0]?.projectName || '',
      institutionName: portfolio.projects[0]?.institutionName || '',
    }));
  }

  // Mendapatkan portfolio berdasarkan id
  async getPortfolioById(id: number): Promise<{ firstName: string; lastName: string; avatar: string; projectName: string; institutionName: string }> {
    const portfolio = await this.prisma.portfolio.findUnique({
      where: { id },
      include: {
        projects: true,
      },
    });

    if (!portfolio) {
      throw new NotFoundException(`Portfolio with ID ${id} not found`);
    }

    return {
      firstName: portfolio.firstName,
      lastName: portfolio.lastName,
      avatar: portfolio.avatar,
      projectName: portfolio.projects[0]?.projectName || '',
      institutionName: portfolio.projects[0]?.institutionName || '',
    };
  }

  // Membuat portfolio baru
  async createPortfolio(data: { username: string; password: string; firstName: string; lastName: string; avatar: string; hobby: string }): Promise<Portfolio> {
    return this.prisma.portfolio.create({
      data,
    });
  }

  // Membuat project baru
  async createProject(data: { projectName: string; institutionName: string; userId: number }): Promise<Project> {
    return this.prisma.project.create({
      data,
    });
  }

  // Update portfolio berdasarkan id
  async updatePortfolioById(id: number, data: { firstName: string; lastName: string; avatar: string; hobby: string }): Promise<Portfolio> {
    const portfolio = await this.prisma.portfolio.update({
      where: { id },
      data,
    });

    return portfolio;
  }
}

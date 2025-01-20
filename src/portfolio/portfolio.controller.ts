import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  // Mendapatkan semua portfolio dan proyek terkait
  @Get()
  async getPortfolio() {
    return this.portfolioService.getAll();
  }

  // Mendapatkan portfolio berdasarkan id
  @Get(':id')
  async getPortfolioById(@Param('id') id: string) {
    return this.portfolioService.getPortfolioById(+id); // +id untuk mengubah string ke number
  }

  // Membuat portfolio baru
  @Post()
  async createPortfolio(@Body() body: any) {
    return this.portfolioService.createPortfolio(body);
  }

  // Membuat project baru
  @Post('project')
  async createProject(@Body() body: any) {
    return this.portfolioService.createProject(body);
  }

  // Update portfolio berdasarkan id
  @Post(':id')
  async updatePortfolio(@Param('id') id: string, @Body() body: any) {
    return this.portfolioService.updatePortfolioById(+id, body);
  }
}

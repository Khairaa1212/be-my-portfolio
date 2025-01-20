import { Module } from '@nestjs/common';
import { PortfolioController } from './portfolio/portfolio.controller';
import { PortfolioService } from './portfolio/portfolio.service';  // Pastikan PortfolioService diimport
import { PrismaService } from './prisma/prisma.service';  // Pastikan PrismaService juga diimport jika diperlukan

@Module({
  imports: [],
  controllers: [PortfolioController],  // Pastikan PortfolioController dimasukkan di sini
  providers: [PortfolioService, PrismaService],  // Pastikan PortfolioService dimasukkan di sini
})
export class AppModule {}

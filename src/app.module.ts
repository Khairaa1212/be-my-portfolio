import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PrismaService } from './prisma/prisma.service';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [PortfolioModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
// src/portfolio/portfolio.controller.ts

import { Controller, Get, Param, Post, Body, Put, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';

@Controller('portfolio')
export class PortfolioController {
    constructor(private readonly portfolioService: PortfolioService) {}

    @Get(':id')
    async getPortfolioById(@Param('id') id: string) {
        return this.portfolioService.getPortfolioById(Number(id));
    }

     @Post()
      @UsePipes(new ValidationPipe())
      async createPortfolio(@Body() data: CreatePortfolioDto){
        return this.portfolioService.createPortfolio(data)
      }

      @Post(':id')
      async updatePortfolio(
        @Param('id') id:string,
        @Body() data: {firstName?: string; lastName?: string; avatar?: string; project_name?: string; institution_name?:string }
        ){
        return this.portfolioService.updatePortfolio(Number(id),data)
      }
}
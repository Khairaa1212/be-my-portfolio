import { Controller, Get, Param, ParseIntPipe, NotFoundException, InternalServerErrorException, Delete } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
    constructor(private portfolioService: PortfolioService) {}

    @Get(':id')
    async getUserWithProjects(@Param('id', new ParseIntPipe()) id: number) {
        try {
            return await this.portfolioService.getUserWithProjects(id);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException(error.message);
            } else {
                throw new InternalServerErrorException(error.message);
            }
        }
    }

    @Delete(':id')
    async deletePortfolio(@Param('id', new ParseIntPipe()) id: number) {
        try {
            return await this.portfolioService.deletePortfolio(id);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException(error.message);
            } else {
                throw new InternalServerErrorException(error.message);
            }
        }
    }
}
// src/portfolio/dto/create-portfolio.dto.ts
import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreatePortfolioDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

     @IsString()
     @IsNotEmpty()
    lastName: string;

    @IsOptional()
    @IsString()
    avatar?: string;
    
    @IsString()
    @IsNotEmpty()
    project_name: string;

     @IsString()
     @IsNotEmpty()
     institution_name: string;
}
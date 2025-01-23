import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProjectDto {
    @IsNotEmpty()
    @IsString()
    projectName: string;

    @IsNotEmpty()
    @IsString()
    institutionName: string;

    @IsNotEmpty()
    @IsNumber()
    userId: number;
}
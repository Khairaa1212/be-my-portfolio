import { Controller, Get, Param, ParseIntPipe, NotFoundException, InternalServerErrorException, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get(':id')
    async getUserWithProjects(@Param('id', new ParseIntPipe()) id: number) {
        try {
            return await this.userService.getUserWithProjects(id);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException(error.message);
            } else {
                throw new InternalServerErrorException(error.message);
            }
        }
    }
}
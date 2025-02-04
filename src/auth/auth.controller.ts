import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard'; // Import guard untuk JWT
import { Request } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Endpoint untuk login dan mendapatkan JWT
  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    return this.authService.login(body.username, body.password);
  }

  // Endpoint untuk mendapatkan data pengguna yang sedang login
  @UseGuards(JwtAuthGuard) // Guard ini memastikan hanya pengguna dengan token valid yang bisa mengakses
  @Get('user')
  async getMe(@Request() req) {
    // req.user berisi data pengguna yang telah diverifikasi oleh JwtStrategy
    const { id, username, password } = req.user;
    return { id, username, password }; // Mengembalikan id, username, dan password pengguna
  }
}

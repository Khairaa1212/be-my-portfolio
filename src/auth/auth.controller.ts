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
    const { id, username } = req.user;  // Hanya ambil id dan username
    return { id, username };              // Kembalikan hanya id dan username
  }

  @Post('register')
  async register(@Body() body: any) {
    return this.authService.register(
      body.username,
      body.password,
      body.firstName,
      body.lastName,
      body.avatar,
      body.hobby, // Pastikan argumen 'hobby' ada dan nilainya sesuai
    );
  }

  async function () {
    try {
        // operasi yang bisa gagal, seperti query Prisma
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Terjadi kesalahan pada server');
    }
  }
}
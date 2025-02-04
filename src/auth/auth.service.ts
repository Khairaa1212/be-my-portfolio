import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // Fungsi login yang menghasilkan JWT
  async login(username: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (user && user.password === password) {
      const payload = { id: user.id, username: user.username };
      const token = this.jwtService.sign(payload);
      return { token };
    } else {
      throw new Error('Invalid username or password');
    }
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common'; // Import UnauthorizedException
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials'); // Lebih baik menggunakan UnauthorizedException
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const { password: hashedPassword, ...result } = user; // Hindari mengirim hash password
      const payload = { id: user.id, username: user.username };
      const token = this.jwtService.sign(payload);
      return { token };
    } else {
      throw new UnauthorizedException('Invalid credentials'); // Lebih baik menggunakan UnauthorizedException
    }
  }

  async register(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    avatar: string,
    hobby: string,
  ): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        firstName,
        lastName,
        avatar,
        hobby,
      },
    });

    return {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
      hobby: user.hobby
    };
  }
}
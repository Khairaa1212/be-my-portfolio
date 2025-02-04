import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { PrismaService } from '../prisma/prisma.service';
import { ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Mengambil token dari header Authorization
      secretOrKey: 'SECRET_KEY', // Ganti dengan secret key yang aman
    });
  }

  async validate(payload: any) {
    // Mengecek jika payload.id valid dan mengambil user dari database
    const user = await this.prisma.user.findUnique({
      where: { id: payload.id },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user; // Data user akan disertakan dalam req.user
  }
}

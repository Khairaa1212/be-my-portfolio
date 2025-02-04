import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtStrategy } from './jwt.strategy'; // Import JwtStrategy

@Module({
  imports: [
    JwtModule.register({
      secret: 'SECRET_KEY', // Ganti dengan secret key yang lebih aman
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, PrismaService, JwtStrategy], // Tambahkan JwtStrategy ke providers
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super();
  }

  // Metode untuk create
  async create(data: any) {
    return await this.portfolio.create({
      data,
    });
  }

  // Metode untuk findAll
  async findAll() {
    return await this.portfolio.findMany();
  }

  // Metode untuk findOne
  async findOne(id: number) {
    return await this.portfolio.findUnique({
      where: { id },
    });
  }

  // Metode untuk update
  async update(id: number, data: any) {
    return await this.portfolio.update({
      where: { id },
      data,
    });
  }

  // Metode untuk remove
  async remove(id: number) {
    return await this.portfolio.delete({
      where: { id },
    });
  }
}

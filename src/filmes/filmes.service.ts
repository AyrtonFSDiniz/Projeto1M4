import { Injectable } from '@nestjs/common';
import { Filme } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}

  async createPrisma(createFilmeDto: CreateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.create({
      data: { ...createFilmeDto },
    });
  }

  async findAllPrisma(): Promise<Filme[]> {
    return await this.prisma.filme.findMany();
  }

  async findOnePrisma(id: number): Promise<Filme> {
    return await this.prisma.filme.findUnique({ where: { id } });
  }

  async updatePrisma(
    id: number,
    updateFilmeDto: UpdateFilmeDto,
  ): Promise<Filme> {
    return await this.prisma.update({
      id,
      updateFilmeDtodata: { ...updateFilmeDto },
      where: { id },
    });
  }

  async removeprisma(id: number) {
    return await this.prisma.delete({ where: { id } });
  }
}

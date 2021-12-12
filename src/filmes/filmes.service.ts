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
    const film = {
      nome: updateFilmeDto.nome,
      imagem: updateFilmeDto.imagem,
      data_lancamento: updateFilmeDto.data_lancamento,
      tempo_duracao: updateFilmeDto.tempo_duracao,
    };
    return await this.prisma.filme.update({
      data: { ...film },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.filme.delete({ where: { id } });
  }
}

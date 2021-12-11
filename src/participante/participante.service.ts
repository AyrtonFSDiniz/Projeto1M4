import { Injectable } from '@nestjs/common';
import { Participante } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Injectable()
export class ParticipanteService {
  constructor(private prisma: PrismaService) {}

  async createPrisma(
    createParticipanteDto: CreateParticipanteDto,
  ): Promise<Participante> {
    return await this.prisma.participante.create({
      data: { ...CreateParticipanteDto },
    });
  }

  async findAllPrisma(): Promise<Participante[]> {
    return await this.prisma.participante.findMany();
  }

  async findOnePrisma(id: number): Promise<Participante> {
    return await this.prisma.participante.findUnique({ where: { id } });
  }

  async updatePrisma(
    id: number,
    updateParticipanteDto: UpdateParticipanteDto,
  ): Promise<Participante> {
    return await this.prisma.update({
      id,
      updateParticipanteDtodata: { ...updateParticipanteDto },
      where: { id },
    });
  }

  async removeprisma(id: number) {
    return await this.prisma.delete({ where: { id } });
  }
}

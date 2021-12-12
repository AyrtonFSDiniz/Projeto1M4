import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParticipanteService } from './participante.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Controller('participante')
export class ParticipanteController {
  constructor(private readonly participanteService: ParticipanteService) {}

  @Post()
  async createPrisma(@Body() createParticipanteDto: CreateParticipanteDto) {
    return await this.participanteService.createPrisma(createParticipanteDto);
  }

  @Get()
  async findAllPrisma() {
    return await this.participanteService.findAllPrisma();
  }

  @Get(':id')
  async findOnePrisma(@Param('id') id: string) {
    return await this.participanteService.findOnePrisma(+id);
  }

  @Patch(':id')
  async updatePrisma(
    @Param('id') id: string,
    @Body() updateParticipanteDto: UpdateParticipanteDto,
  ) {
    return await this.participanteService.updatePrisma(
      +id,
      updateParticipanteDto,
    );
  }

  @Delete(':id')
  async removePrisma(@Param('id') id: string) {
    return await this.participanteService.removePrisma(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from '@prisma/client';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  async createPrisma(@Body() data: CreateFilmeDto): Promise<Filme> {
    return await this.filmesService.createPrisma(data);
  }

  @Get()
  async findAllPrisma() {
    return await this.filmesService.findAllPrisma();
  }

  @Get(':id')
  async findOnePrisma(@Param('id') id: string) {
    return await this.filmesService.findOnePrisma(+id);
  }

  @Patch(':id')
  async updatePrisma(
    @Param('id') id: string,
    @Body() updateFilmeDto: UpdateFilmeDto,
  ) {
    return await this.filmesService.updatePrisma(+id, updateFilmeDto);
  }

  @Delete(':id')
  async removePrisma(@Param('id') id: string) {
    return await this.filmesService.removePrisma(+id);
  }
}

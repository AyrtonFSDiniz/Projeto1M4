import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Controller('genero')
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Post()
  async createPrisma(@Body() createGeneroDto: CreateGeneroDto) {
    return await this.generoService.createPrisma(createGeneroDto);
  }

  @Get()
  async findAllPrisma() {
    return await this.generoService.findAllPrisma();
  }

  @Get(':id')
  async findOnePrisma(@Param('id') id: string) {
    return await this.generoService.findOnePrisma(+id);
  }

  @Patch(':id')
  async updatePrisma(
    @Param('id') id: string,
    @Body() updateGeneroDto: UpdateGeneroDto,
  ) {
    return await this.generoService.updatePrisma(+id, updateGeneroDto);
  }

  @Delete(':id')
  async removePrisma(@Param('id') id: string) {
    return await this.generoService.removePrisma(+id);
  }
}

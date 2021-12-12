import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { CreateGeneroDto } from 'src/genero/dto/create-genero.dto';
import { CreateParticipanteDto } from 'src/participante/dto/create-participante.dto';

export class CreateFilmeDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
  @IsUrl()
  @IsNotEmpty()
  imagem: string;
  @IsNotEmpty()
  @IsString()
  data_lancamento: string;
  @IsNotEmpty()
  @IsString()
  tempo_duracao: string;
  @IsNotEmpty()
  genero: CreateGeneroDto[];
  @IsNotEmpty()
  participante: CreateParticipanteDto[];
}

import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateParticipanteDto {
  id: number;
  @IsNotEmpty()
  @IsString()
  nome: string;
  @IsUrl()
  @IsNotEmpty()
  imagem: string;
  @IsNotEmpty()
  @IsString()
  data_nascimento: string;
  @IsNotEmpty()
  @IsString()
  ator: string;
}

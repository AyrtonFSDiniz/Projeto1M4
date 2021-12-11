import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateFilmeDto {
  id: number;
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
}

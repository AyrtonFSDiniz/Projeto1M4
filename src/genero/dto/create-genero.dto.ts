import { IsNotEmpty, IsString } from 'class-validator';
import { CreateFilmeDto } from 'src/filmes/dto/create-filme.dto';

export class CreateGeneroDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
  @IsString()
  filme?: CreateFilmeDto[];
}

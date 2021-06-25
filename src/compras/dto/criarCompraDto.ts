import { IsDefined, IsISO8601, MinLength, ValidateNested } from 'class-validator';
import { Endereco } from 'src/models/endereco';
import { Usuario } from 'src/models/usuario';

export class CriarCompraDTO {

  @ValidateNested()
  usuario: Usuario;

  @MinLength(1)
  @IsDefined()
  total: string;

  @MinLength(1)
  @IsDefined()
  loja: string;

  @IsISO8601()
  data: string;

  //@ValidateNested()
  endereco: Endereco
}
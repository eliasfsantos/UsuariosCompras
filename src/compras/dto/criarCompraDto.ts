import { IsDate, IsDefined, IsISO8601, ValidateNested } from 'class-validator';
import { Endereco } from 'src/models/endereco';
import { Usuario } from 'src/models/usuario';

export class CriarCompraDTO {

    //@ValidateNested()
    usuario: Usuario;

    @IsDefined()
    total: string;

    @IsDefined()
    loja: string;

    @IsISO8601()
    data: string;

    //@ValidateNested()
    endereco: Endereco
  }
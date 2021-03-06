import { IsEmail, MinLength, ValidateNested } from 'class-validator';
import { Endereco } from 'src/models';
export class CriarUsuarioDto {

  @MinLength(4)
  nome: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  senha: string;

  @MinLength(8)
  confirmacaoDeSenha: string;

  @ValidateNested()
  endereco: Endereco
}
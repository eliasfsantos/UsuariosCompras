import { Endereco } from 'src/models/endereco';
import { Usuario } from 'src/models/usuario';

export interface CriarCompraDTO {
    usuario: Usuario;
    total: string;
    loja: string;
    data: string;
    endereco: Endereco
  }
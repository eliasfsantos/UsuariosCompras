import { Endereco } from 'src/usuarios/endereco.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';

export interface ComprasDTO {
    id: number;
    usuario: Usuarios;
    total: string;
    loja: string;
    data: string;
    endereco: Endereco
  }
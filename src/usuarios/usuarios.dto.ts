import { Endereco } from './endereco.entity';
export interface UsuariosDTO {
    id: number;
    nome: string;
    email: string;
    senha: string;
    endereco: Endereco
  }
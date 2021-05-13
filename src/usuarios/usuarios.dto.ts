import { Endereco } from './endereco.entity';
export interface UsuariosDTO {
    id: number;
    nome: string;
    email: string;
    senha: string;
    confirmacao_senha: string;
    endereco: Endereco
  }
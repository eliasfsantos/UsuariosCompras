import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { UsuariosDTO } from './usuarios.dto';
import { UsuariosService } from './usuarios.services';

@Controller('cadastro')
export class CadastroController {
  constructor(private readonly usuariosService:UsuariosService) {}

  @Post()
  async criarUsuarios(@Body() data: UsuariosDTO) {
    if(data.senha.length > 11 && data.confirmacao_senha == data.senha) return {
      statusCode: HttpStatus.CREATED,
      message: 'Usuario adicionado com sucesso',
      data: await this.usuariosService.criar(data),
    };
    else if(data.senha.length < 12) return {
      statusCode: HttpStatus.LENGTH_REQUIRED,
      message: 'senha precisa ter pelo menos 12 caracteres'
    }
    else return {
        statusCode: HttpStatus.NOT_ACCEPTABLE,
        message: 'senha não confere'
    }
  }
}

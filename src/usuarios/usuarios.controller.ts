import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { validate } from 'class-validator';

import { CriarUsuarioDto } from './dto/criarUsuarioDto';
import { UsuarioService } from './usuario.services';
import { Usuario } from "src/models/usuario";
import { Endereco } from 'src/models';


@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuarioService: UsuarioService) { }

  @Get('/')
  buscarUsuarios() {
    return this.usuarioService.findAll();
  }

  @Get('/:id')
  readUser(@Param('id') id) {
    return this.usuarioService.findOne(id)
  }

  @Post('/')
  async criarUsuarios(@Body() criarUsuarioDto: CriarUsuarioDto) {
    if (criarUsuarioDto.confirmacaoDeSenha == criarUsuarioDto.senha) return {
      statusCode: HttpStatus.CREATED,
      message: 'Usuario adicionado com sucesso',
      data: await this.usuarioService.criar(criarUsuarioDto)
    }
    else return {
      statusCode: HttpStatus.NOT_ACCEPTABLE,
      message: 'senha não confere'
    }
  }
}

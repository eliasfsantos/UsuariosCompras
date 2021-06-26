import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CriarUsuarioDto } from './dto/criarUsuarioDto';
import { UsuarioService } from './usuario.services';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuarioService: UsuarioService) { }

  @Get('/')
  buscarUsuarios() {
    return this.usuarioService.findAll();
  }

  @Get('/:id')
  async readUser(@Param('id') id) {
    const usuario = await this.usuarioService.findOne(id)
    if (usuario) return this.usuarioService.findOne(id)
    else throw new HttpException('usuario não encontrado', HttpStatus.NOT_FOUND)
  }
  @Get('/:id/compras')
  ComprasUsuario(@Param('id') id) {
    return this.usuarioService.comprasUsuario(id)
  }

  @Post('/')
  //@UsePipes(new ValidationPipe({ transform: true })) // foi adicionado globalmente em main.ts
  async criarUsuarios(@Body() criarUsuarioDto: CriarUsuarioDto) {
    const usuarioDoEmail = await this.usuarioService.findByEmail(criarUsuarioDto.email)
    if (criarUsuarioDto.confirmacaoDeSenha == criarUsuarioDto.senha && hasNumber(criarUsuarioDto.senha)) {
      if (usuarioDoEmail != undefined) {
        if (criarUsuarioDto.email != usuarioDoEmail.email) {
          return {
            statusCode: HttpStatus.CREATED,
            message: 'Usuario adicionado com sucesso',
            data: await this.usuarioService.criar(criarUsuarioDto)
          }
        }
        else {
          throw new HttpException('e-mail já cadastrado', HttpStatus.CONFLICT)
        }
      }
      else return {
        statusCode: HttpStatus.CREATED,
        message: 'Usuario adicionado com sucesso',
        data: await this.usuarioService.criar(criarUsuarioDto)
      }
    }
    else throw new HttpException('senha não confere/não possui número', HttpStatus.NOT_ACCEPTABLE)
  }
}

function hasNumber(myString) {
  return /\d/.test(myString);
}
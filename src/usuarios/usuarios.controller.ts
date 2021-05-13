import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { UsuariosDTO } from './usuarios.dto';
import { Usuarios } from './usuarios.entity';
import { UsuariosService } from './usuarios.services';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService:UsuariosService) {}

  @Get()
  async getUsuarios(): Promise<Usuarios[]>{
    return this.usuariosService.findAll();
  }

  @Get(':id')
  async readUser(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.usuariosService.read(id),
    };
  }

  // @Post()
  // async criarUsuarios(@Body() data: UsuariosDTO) {
  //   if(data.senha.length > 11) return {
  //     statusCode: HttpStatus.CREATED,
  //     message: 'Usuario adicionado com sucesso',
  //     data: await this.usuariosService.criar(data),
  //   };
  //   else return {
  //     statusCode: HttpStatus.LENGTH_REQUIRED,
  //     message: 'senha precisa ter pelo menos 12 caracteres'
  //   }
  // }
}

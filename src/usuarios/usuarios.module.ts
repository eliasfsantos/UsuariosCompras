import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuarioService } from './usuario.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco, Usuario } from 'src/models';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Endereco])],
  controllers: [UsuariosController],
  providers: [UsuarioService]
})
export class UsuariosModule {}
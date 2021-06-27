import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuarioService } from './usuario.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra, Endereco, Usuario } from 'src/models';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Endereco, Compra])],
  controllers: [UsuariosController],
  providers: [UsuarioService],
  exports: [UsuarioService]
})
export class UsuariosModule {}
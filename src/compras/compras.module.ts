import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra, Endereco, Usuario } from 'src/models';
import { ComprasController } from './compras.controller';
import { CompraService } from './compra.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forFeature([Compra, Usuario, Endereco]), UsuariosModule],
  controllers: [ComprasController],
  providers: [CompraService]
})
export class ComprasModule { }

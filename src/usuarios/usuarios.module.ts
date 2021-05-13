import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CadastroController } from './cadastro.controller';
import { UsuariosController } from './usuarios.controller';
import { usuariosProviders } from './usuarios.providers';
import { UsuariosService } from './usuarios.services';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController, CadastroController],
  providers: [
    ...usuariosProviders,
    UsuariosService,
  ],
})
export class UsuariosModule {}
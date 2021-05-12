import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UsuariosController } from './usuarios.controller';
import { usuariosProviders } from './usuarios.providers';
import { UsuariosService } from './usuarios.services';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController],
  providers: [
    ...usuariosProviders,
    UsuariosService,
  ],
})
export class UsuariosModule {}
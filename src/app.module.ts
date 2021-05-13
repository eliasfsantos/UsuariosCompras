import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ComprasController } from './compras/compras.controller';
import { ComprasService } from './compras/compras.service';
import { ComprasModule } from './compras/compras.module';

@Module({
  imports: [
    UsuariosModule,
    ComprasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

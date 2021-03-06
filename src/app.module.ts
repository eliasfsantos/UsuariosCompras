import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ComprasModule } from './compras/compras.module';
import { Connection } from 'typeorm';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsuariosModule,
    ComprasModule,
    DatabaseModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) { }
}

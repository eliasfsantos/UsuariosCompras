import { Connection, Repository } from 'typeorm';
import { Usuarios } from './usuarios.entity';

export const usuariosProviders = [
  {
    provide: 'USUARIOS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Usuarios),
    inject: ['DATABASE_CONNECTION'],
  },
];
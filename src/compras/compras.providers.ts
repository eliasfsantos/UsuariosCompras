import { Connection } from "typeorm";
import { Compras } from "./compras.entity";

export const comprasProviders = [
    {
      provide: 'COMPRAS_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(Compras),
      inject: ['DATABASE_CONNECTION'],
    },
  ];
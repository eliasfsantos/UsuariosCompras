import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import * as Models from '../models'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'desafio1',
      entities: Object.keys(Models).map((modelName) => Models[modelName]),
      synchronize: true,
      autoLoadEntities: true,
      logger: 'debug',
    })
  ]
})
export class DatabaseModule {}
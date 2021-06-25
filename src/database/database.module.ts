import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import * as Models from '../models'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'remotemysql.com',
      port: 3306,
      username: 'fXeOOWfeOv',
      password: 'mVAOJIzHXW',
      database: 'fXeOOWfeOv',
      entities: Object.keys(Models).map((modelName) => Models[modelName]),
      synchronize: true,
      autoLoadEntities: true,
      logger: 'debug',
    })
  ]
})
export class DatabaseModule {}
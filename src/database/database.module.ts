import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import * as Models from '../models'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.CLEARDB_DATABASE_URL,
//      host: 'remotemysql.com',
//      port: 3306,
//      username: process.env.DATABASE_USER,
//      password: process.env.DATABASE_PASSWORD, 
//      database: process.env.DATABASE_DATABASE,
      entities: Object.keys(Models).map((modelName) => Models[modelName]),
      synchronize: true,
      autoLoadEntities: true,
      logger: 'debug',
    })
  ]
})
export class DatabaseModule {}
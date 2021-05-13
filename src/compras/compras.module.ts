import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ComprasController } from './compras.controller';
import { comprasProviders } from './compras.providers';
import { ComprasService } from './compras.service';

@Module({
    imports: [DatabaseModule],
    controllers: [ComprasController],
    providers: [
      ...comprasProviders,
      ComprasService,
    ],
})
export class ComprasModule {}

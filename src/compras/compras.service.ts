import { Injectable, Inject } from '@nestjs/common';
import { Endereco } from 'src/usuarios/endereco.entity';
import { getConnection, Repository } from 'typeorm';
import { ComprasDTO } from './compras.dto';
import { Compras } from './compras.entity';

@Injectable()
export class ComprasService {
  constructor(
    @Inject('COMPRAS_REPOSITORY')
    private comprasRepository: Repository<Compras>,
  ) { }

  async findAll(): Promise<Compras[]> {
    return this.comprasRepository.find({ relations: ["endereco", "usuario"] });
  }

  async read(id: number) {
    return await this.comprasRepository.findOne({ where: { id: id }, relations: ["endereco", "usuario"] });
  }

  async criar(data: ComprasDTO) {

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Endereco)
      .values(data.endereco)
      .execute()
    
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Compras)
      .values(data)
      .execute()
    return data;
  }
}
import { Injectable, Inject } from '@nestjs/common';
import { getConnection, Repository } from 'typeorm';
import { Endereco } from './endereco.entity';
import { UsuariosDTO } from './usuarios.dto';
import { Usuarios } from './usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('USUARIOS_REPOSITORY')
    private usuariosRepository: Repository<Usuarios>,
  ) { }

  async findAll(): Promise<Usuarios[]> {
    return this.usuariosRepository.find({ relations: ["endereco"] });
  }

  async read(id: number) {
    return await this.usuariosRepository.findOne({ where: { id: id }, relations: ["endereco"] });
  }

  async criar(data: UsuariosDTO) {

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Endereco)
      .values(data.endereco)
      .execute()
    
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Usuarios)
      .values(data)
      .execute()
    return data;
  }
}
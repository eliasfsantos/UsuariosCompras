import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Endereco } from '../models/endereco';
import { CriarUsuarioDto } from './dto/criarUsuarioDto';
import { Usuario } from '../models/usuario';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
  ) { }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find({ relations: ["endereco"] });
  }

  async findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOne({ where: { id: id }, relations: ["endereco"] });
  }

  async criar(data: CriarUsuarioDto): Promise<Usuario> {

    const novoEndereco = data.endereco
    const novoUsuario = this.usuarioRepository.create(data)
    novoEndereco.usuario = novoUsuario
    
    this.enderecoRepository.create(novoEndereco)
    await this.usuarioRepository.save(novoUsuario)
    await this.enderecoRepository.save(novoEndereco)
    return novoUsuario
  }
}
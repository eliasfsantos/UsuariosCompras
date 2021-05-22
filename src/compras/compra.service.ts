import { Injectable } from '@nestjs/common';
import { CriarCompraDTO } from './dto/criarCompraDto';
import { Compra } from '../models/compra';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CompraService {
  constructor(
    @InjectRepository(Compra)
    private compraRepository: Repository<Compra>,
  ) { }

  async findAll(): Promise<Compra[]> {
    return this.compraRepository.find({ relations: ["endereco", "usuario"] });
  }

  async read(id: number) {
    return await this.compraRepository.findOne({ where: { id: id }, relations: ["endereco", "usuario"] });
  }

  async criar(compra: CriarCompraDTO) {
    const novaCompra = this.compraRepository.create(compra)
    await this.compraRepository.save(novaCompra)
    return novaCompra
  }
}
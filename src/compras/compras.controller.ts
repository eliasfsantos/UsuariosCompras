import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { CriarCompraDTO } from "./dto/criarCompraDto";
import { Compra } from "../models/compra";
import { CompraService } from "./compra.service";
import { UsuariosController } from "src/usuarios/usuarios.controller";
import { UsuarioService } from "src/usuarios/usuario.services";

@Controller('compras')
export class ComprasController {
  constructor(
    private readonly comprasService: CompraService,
    private readonly usuarioService: UsuarioService) { }

  @Get()
  async getCompras(): Promise<Compra[]> {
    return this.comprasService.findAll();
  }

  @Get(':id')
  async readCompra(@Param('id') id: number) {
    const compra = await this.comprasService.read(id)
    if (compra) return {
      statusCode: HttpStatus.OK,
      data: compra,
    }
    else throw new HttpException('compra não encontrada', HttpStatus.NOT_FOUND)
  }

  @Post()
  async criarCompra(@Body() data: CriarCompraDTO) {
    const usuario = this.usuarioService.findOne(data.usuario.id)
    if ((await usuario)) {
      if ((await usuario).enderecos.find(x => x.id == data.endereco.id)) {
        return {
          statusCode: HttpStatus.CREATED,
          message: 'Compra adicionada com sucesso',
          data: await this.comprasService.criar(data),
        };
      }
      else {
        throw new HttpException('endereço não encontrado', HttpStatus.NOT_FOUND)
      }
    }
    else {
      throw new HttpException('usuário não encontrado', HttpStatus.NOT_FOUND)
    }
  }
}
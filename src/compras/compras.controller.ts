import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { CriarCompraDTO } from "./dto/criarCompraDto";
import { Compra } from "../models/compra";
import { CompraService } from "./compra.service";

@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService: CompraService) { }

  @Get()
  async getCompras(): Promise<Compra[]> {
    return this.comprasService.findAll();
  }

  @Get(':id')
  async readCompra(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.comprasService.read(id),
    };
  }

  @Post()
  async criarCompra(@Body() data: CriarCompraDTO) {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Compra adicionada com sucesso',
      data: await this.comprasService.criar(data),
    };
  }
}
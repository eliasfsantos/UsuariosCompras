import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { ComprasDTO } from "./compras.dto";
import { Compras } from "./compras.entity";
import { ComprasService } from "./compras.service";

@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService:ComprasService) {}

  @Get()
  async getCompras(): Promise<Compras[]>{
    return this.comprasService.findAll();
  }

  @Get(':id')
  async readUser(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.comprasService.read(id),
    };
  }

  @Post()
  async criarUsuarios(@Body() data: ComprasDTO) {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Compra adicionada com sucesso',
      data: await this.comprasService.criar(data),
    };
  }
}
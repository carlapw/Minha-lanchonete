import { Controller, Post, Body, Get, Patch, Delete, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.criar(createProductDto);
  }

  @Get()
  async findAll() {
    return this.productService.listar();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.productService.buscarPorId(Number(id));
  }
  @Patch(':id')
  async update(@Param('id') id: number, @Body() createProductDto: CreateProductDto) {
    return this.productService.atualizar(Number(id), createProductDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.productService.remover(Number(id));
  }
}

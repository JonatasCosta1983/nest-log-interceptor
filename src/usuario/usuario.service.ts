import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ParcialUsuarioDto } from './dto/parcial-usuario.dto';

@Injectable()
export class UsuarioService {

  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUsuarioDto) {
    return this.prisma.usuario.create({
      data: data
    })
  }

  async findOne(id: number) {
    return this.prisma.usuario.findFirst({
      where:{id}
    })
  }

  async findAll() {
    return this.prisma.usuario.findMany()
  }

  async update(id: number, data: UpdateUsuarioDto) {
    return this.prisma.usuario.update({
      data : data,
      where:{id}
    })
  }

  async parcial(id: number, data: ParcialUsuarioDto) {
    return this.prisma.usuario.update({
      data : data,
      where:{id}
    })
  }

  async remove(id: number) {
    return this.prisma.usuario.delete({
      where: {id}
    })
  }
}

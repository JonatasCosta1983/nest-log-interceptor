import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ParcialUsuarioDto } from './dto/parcial-usuario.dto';
export declare class UsuarioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUsuarioDto): Promise<import(".prisma/client").Usuario>;
    findOne(id: number): Promise<import(".prisma/client").Usuario>;
    findAll(): Promise<import(".prisma/client").Usuario[]>;
    update(id: number, data: UpdateUsuarioDto): Promise<import(".prisma/client").Usuario>;
    parcial(id: number, data: ParcialUsuarioDto): Promise<import(".prisma/client").Usuario>;
    remove(id: number): Promise<import(".prisma/client").Usuario>;
}

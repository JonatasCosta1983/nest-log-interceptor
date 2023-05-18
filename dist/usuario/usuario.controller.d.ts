import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ParcialUsuarioDto } from './dto/parcial-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<import(".prisma/client").Usuario>;
    findOne(id: number): Promise<import(".prisma/client").Usuario>;
    findAll(): Promise<import(".prisma/client").Usuario[]>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<import(".prisma/client").Usuario>;
    parcial(id: number, parcialUsuarioDto: ParcialUsuarioDto): Promise<import(".prisma/client").Usuario>;
    remove(id: number): Promise<import(".prisma/client").Usuario>;
}

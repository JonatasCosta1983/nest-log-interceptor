import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, isNotEmpty } from "class-validator"

export class CreateUsuarioDto {
    
    @IsString()
    @IsNotEmpty()
    nome: string

    @IsEmail()
    email: string

    @IsStrongPassword({
        minLength:7,
        minLowercase:0,
        minNumbers:0,
        minSymbols:0,
        minUppercase:1
    })
    senha: string
}

import { Transform } from "class-transformer"
import { IsEmail, IsString, MinLength } from "class-validator"

//Creamos la clase createUserDto para transferencia de datos usando un DTO lo que un Data Transfer Object 
export class CreateAuthDto {
    @IsString()
    @Transform(({value})=>value.trim())
    @MinLength(1)
    nombre: string

    @IsString()
    apellido:string
    
    @IsEmail({}, {message: 'El correo no es valido'})
    correo:string

    @Transform(({value})=>value.trim())
    @IsString()
    @MinLength(6)
    password: string
}